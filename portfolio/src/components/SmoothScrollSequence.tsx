'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SmoothScrollSequenceProps {
  totalFrames?: number;
  folderPath?: string;
  scrollMultiplier?: number; // e.g. 4.5 = 450vh
  lerpFactor?: number;
}

export default function SmoothScrollSequence({
  totalFrames = 149,
  folderPath = '/sequence',
  scrollMultiplier = 4.5,
  lerpFactor = 0.085,
}: SmoothScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
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
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = container.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        targetProgress = 0;
        return;
      }

      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / scrollableDistance));
      targetProgress = progress;
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
        setTimeout(() => setIsLoaded(true), 250);
      }
    };

    const decodeOrLoad = async (img: HTMLImageElement) => {
      try {
        await img.decode();
      } catch {
        // Fallback for older environments or decoding failure
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
      // 1. Instant load & paint first frame
      const firstImg = new Image();
      firstImg.src = getFramePath(0);

      await decodeOrLoad(firstImg);

      images[0] = firstImg;
      loadedCount++;
      drawImageCover(firstImg);
      lastRenderedIndex = 0;
      updateProgress();

      // 2. Preload remaining frames
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
  }, [totalFrames, folderPath, scrollMultiplier, lerpFactor]);

  return (
    <div
      ref={containerRef}
      style={{ height: `${scrollMultiplier * 100}vh` }}
      className="relative w-full bg-[#02070d]"
    >
      {/* Subtle loader bar that auto-fades */}
      {!isLoaded && (
        <div className="fixed top-0 left-0 w-full h-[2.5px] bg-white/5 z-50 pointer-events-none transition-opacity duration-700">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 transition-all duration-150"
            style={{ width: `${loadProgress}%` }}
          />
        </div>
      )}

      {/* Sticky fullscreen canvas */}
      <div className="sticky top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none flex items-center justify-center bg-[#02070d]">
        <canvas ref={canvasRef} className="block w-screen h-screen" />
      </div>
    </div>
  );
}
