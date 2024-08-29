"use client";

import { useEffect, useRef, useState } from "react";

export const SplashScreen = () => {
  const splashRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Comenzar la animación de salida después de 2 segundos
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // 2000ms = 2 segundos

    // Eliminar el elemento del DOM después de que la animación termine
    const removeTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 1000ms después de la animación de salida (total de 3000ms)

    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={splashRef}
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 z-50 transition-transform duration-1000 transform ${
        isAnimating ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h1 className="text-white text-6xl font-bold">HELLO</h1>
    </div>
  );
};
