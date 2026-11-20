'use client';

import React, { useEffect, useRef, useState } from 'react';

interface BackgroundScrollSequenceProps {
  totalFrames?: number;
  folderPath?: string;
  lerpFactor?: number;
}

export default function BackgroundScrollSequence({
  totalFrames = 149,
  folderPath = '/sequence',
  lerpFactor = 0.25, // Réactivité vive pour éliminer tout décalage avec le scroll
}: BackgroundScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const images: (HTMLImageElement | null)[] = new Array(totalFrames).fill(null);
    imagesRef.current = images;

    let loadedCount = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let lastRenderedIndex = -1;
    let animationFrameId: number;
    let isDestroyed = false;

    const getFramePath = (index: number) => {
      const frameNum = String(index + 1).padStart(3, '0');
      return `${folderPath}/ezgif-frame-${frameNum}.jpg`;
    };

    const drawImageCover = (img: HTMLImageElement) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const scale = Math.max(cw / iw, ch / ih);
      const nw = Math.round(iw * scale);
      const nh = Math.round(ih * scale);
      const nx = Math.round((cw - nw) * 0.5);
      const ny = Math.round((ch - nh) * 0.5);

      ctx.drawImage(img, nx, ny, nw, nh);
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      renderCurrent(true);
    };

    const getBestAvailableFrame = (index: number): HTMLImageElement | null => {
      if (images[index]?.complete && images[index]?.naturalWidth > 0) {
        return images[index];
      }
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = index - offset;
        if (prev >= 0 && images[prev]?.complete && images[prev]?.naturalWidth > 0) {
          return images[prev];
        }
        const next = index + offset;
        if (next < totalFrames && images[next]?.complete && images[next]?.naturalWidth > 0) {
          return images[next];
        }
      }
      return null;
    };

    const renderCurrent = (force = false) => {
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.round(currentProgress * (totalFrames - 1)))
      );

      if (force || frameIndex !== lastRenderedIndex) {
        const img = getBestAvailableFrame(frameIndex);
        if (img) {
          drawImageCover(img);
          lastRenderedIndex = frameIndex;
        }
      }
    };

    const updateScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        targetProgress = 0;
      } else {
        targetProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      }
    };

    const loop = () => {
      if (isDestroyed) return;

      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0001) {
        currentProgress += diff * lerpFactor;
      } else {
        currentProgress = targetProgress;
      }

      renderCurrent();
      animationFrameId = requestAnimationFrame(loop);
    };

    const updateProgress = () => {
      if (isDestroyed) return;
      const pct = Math.round((loadedCount / totalFrames) * 100);
      setLoadProgress(pct);
      if (loadedCount >= totalFrames) {
        setTimeout(() => {
          if (!isDestroyed) setIsLoaded(true);
        }, 300);
      }
    };

    const fetchSingleImage = (i: number): Promise<void> => {
      return new Promise((resolve) => {
        if (isDestroyed || images[i]) {
          resolve();
          return;
        }

        const img = new Image();
        img.src = getFramePath(i);

        const onDone = () => {
          images[i] = img;
          loadedCount++;
          updateProgress();
          resolve();
        };

        img.decode().then(onDone).catch(onDone);
      });
    };

    // Pool de concurrence pour ne pas saturer le réseau ni le CPU
    const loadBatchWithConcurrency = async (indices: number[], concurrency = 4) => {
      let index = 0;
      const worker = async () => {
        while (index < indices.length && !isDestroyed) {
          const current = indices[index++];
          await fetchSingleImage(current);
        }
      };

      const workers = Array.from({ length: Math.min(concurrency, indices.length) }, () => worker());
      await Promise.all(workers);
    };

    const startStagedPreload = async () => {
      // Étape 1 : Frame 0 immédiate pour affichage instantané
      await fetchSingleImage(0);
      if (isDestroyed) return;
      renderCurrent(true);

      // Étape 2 : Chargement immédiat des "Keyframes" (toutes les 4 frames)
      // Cela couvre 100% du scroll en un instant sans trou visuel
      const keyframes: number[] = [];
      for (let i = 4; i < totalFrames; i += 4) {
        keyframes.push(i);
      }
      await loadBatchWithConcurrency(keyframes, 5);
      if (isDestroyed) return;

      // Étape 3 : Remplissage fluide des frames intermédiaires en arrière-plan
      const remaining: number[] = [];
      for (let i = 1; i < totalFrames; i++) {
        if (i % 4 !== 0) {
          remaining.push(i);
        }
      }
      await loadBatchWithConcurrency(remaining, 4);
    };

    // Connexion aux événements
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', updateScroll, { passive: true });

    // Si Lenis est présent, écouter les updates régulières
    const intervalLenis = setInterval(() => {
      const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void } }).__lenis;
      if (lenis) {
        lenis.on('scroll', updateScroll);
        clearInterval(intervalLenis);
      }
    }, 100);

    resizeCanvas();
    startStagedPreload();
    updateScroll();
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      isDestroyed = true;
      clearInterval(intervalLenis);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [totalFrames, folderPath, lerpFactor]);

  return (
    <>
      {/* Barre de progression ultra-fine qui s'estompe automatiquement */}
      {!isLoaded && (
        <div className="fixed top-0 left-0 w-full h-[2.5px] bg-white/5 z-[9999] pointer-events-none transition-opacity duration-700">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-150"
            style={{ width: `${loadProgress}%` }}
          />
        </div>
      )}

      {/* Canvas en arrière-plan fixe */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden bg-[#02070d]">
        <canvas ref={canvasRef} className="block w-full h-full" />
        {/* Overlay sombre garantissant la lisibilité parfaite des textes et cartes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02070d]/65 via-[#02070d]/45 to-[#02070d]/70 pointer-events-none" />
      </div>
    </>
  );
}
