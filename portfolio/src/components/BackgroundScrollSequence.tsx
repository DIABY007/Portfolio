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
  lerpFactor = 0.085,
}: BackgroundScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;

    const images: (HTMLImageElement | null)[] = new Array(totalFrames).fill(null);
    imagesRef.current = images;

    let loadedCount = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let lastRenderedIndex = -1;
    let animationFrameId: number;

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
      const pct = Math.round((loadedCount / totalFrames) * 100);
      setLoadProgress(pct);
      if (loadedCount >= totalFrames) {
        setTimeout(() => setIsLoaded(true), 300);
      }
    };

    const decodeOrLoad = async (img: HTMLImageElement) => {
      try {
        await img.decode();
      } catch {
        // Fallback handled
      }
    };

    const loadAndDecodeImage = async (i: number) => {
      const img = new Image();
      img.src = getFramePath(i);

      await decodeOrLoad(img);

      images[i] = img;
      loadedCount++;
      updateProgress();
    };

    const preloadImages = async () => {
      // 1. Instant load and paint first frame
      const firstImg = new Image();
      firstImg.src = getFramePath(0);

      await decodeOrLoad(firstImg);

      images[0] = firstImg;
      loadedCount++;
      drawImageCover(firstImg);
      lastRenderedIndex = 0;
      updateProgress();

      // 2. Preload remaining frames in background
      for (let i = 1; i < totalFrames; i++) {
        loadAndDecodeImage(i);
      }
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', updateScroll, { passive: true });

    resizeCanvas();
    preloadImages();
    updateScroll();
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [totalFrames, folderPath, lerpFactor]);

  return (
    <>
      {/* Discreet top loading progress bar that fades out */}
      {!isLoaded && (
        <div className="fixed top-0 left-0 w-full h-[2.5px] bg-white/5 z-[9999] pointer-events-none transition-opacity duration-700">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-150"
            style={{ width: `${loadProgress}%` }}
          />
        </div>
      )}

      {/* Fixed Fullscreen Background Canvas */}
      <div className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden bg-[#02070d]">
        <canvas ref={canvasRef} className="block w-full h-full" />
        {/* Cinematic dark overlay to guarantee 100% contrast & legibility for all text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02070d]/60 via-[#02070d]/40 to-[#02070d]/70 pointer-events-none" />
      </div>
    </>
  );
}
