"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Particles({
  className,
  quantity = 50,
  staticity = 50,
  ease = 50,
  refresh = false,
  color = "#ffffff",
  particleSize = 1.5,
  particleOpacity = 0.5,
}) {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const context = useRef(null);
  const circles = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = [];
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * particleSize) + 1;
    const alpha = Number(Math.random().toFixed(2)) * particleOpacity;
    const dynamicColor = color;

    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      color: dynamicColor,
    };
  };

  const drawParticles = () => {
    for (let i = 0; i < quantity; i++) {
      circles.current.push(circleParams());
    }
  };

  const animate = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      
      for (let i = 0; i < circles.current.length; i++) {
        const circle = circles.current[i];
        
        // Move particles based on mouse position with staticity factor
        if (mousePosition.current.x && mousePosition.current.y) {
          const distanceX = mousePosition.current.x - circle.x;
          const distanceY = mousePosition.current.y - circle.y;
          const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
          const force = (staticity / 8) / distance;
          
          if (distance < staticity) {
            const angle = Math.atan2(distanceY, distanceX);
            const forceX = Math.cos(angle) * force;
            const forceY = Math.sin(angle) * force;
            
            circle.translateX += forceX;
            circle.translateY += forceY;
          }
        }
        
        // Apply ease
        circle.translateX *= ease / 100;
        circle.translateY *= ease / 100;
        
        // Apply translation
        circle.x += circle.translateX;
        circle.y += circle.translateY;
        
        // Draw circle
        context.current.beginPath();
        context.current.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
        context.current.fillStyle = `rgba(${hexToRgb(circle.color)}, ${circle.alpha})`;
        context.current.fill();
      }
    }
    
    window.requestAnimationFrame(animate);
  };

  const onMouseMove = (e) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      
      if (inside) {
        mousePosition.current.x = x;
        mousePosition.current.y = y;
      }
    }
  };

  // Helper function to convert hex to rgb
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : "255, 255, 255";
  };

  return (
    <div
      ref={canvasContainerRef}
      className={cn("fixed inset-0 -z-10", className)}
      onMouseMove={onMouseMove}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}