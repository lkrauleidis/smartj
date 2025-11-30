"use client";

import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create animated gradient mesh
    let time = 0;
    const animate = () => {
      time += 0.005;
      
      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient1.addColorStop(0, `hsl(${(time * 50) % 360}, 70%, 60%)`);
      gradient1.addColorStop(0.5, `hsl(${(time * 50 + 120) % 360}, 70%, 50%)`);
      gradient1.addColorStop(1, `hsl(${(time * 50 + 240) % 360}, 70%, 60%)`);
      
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add animated circles
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 2) + Math.cos(time + i) * (200 + i * 100);
        const y = (canvas.height / 2) + Math.sin(time + i) * (200 + i * 100);
        const radius = 100 + Math.sin(time * 2 + i) * 50;
        
        const gradient2 = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient2.addColorStop(0, `rgba(255, 255, 255, ${0.1 + Math.sin(time + i) * 0.1})`);
        gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
    />
  );
};

export default AnimatedBackground;

