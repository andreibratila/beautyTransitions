"use client";
import Link, { LinkProps } from "next/link";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();
  const transitionOverlayRef = useRef<HTMLDivElement>(null);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (transitionOverlayRef.current) {
      transitionOverlayRef.current.classList.remove("hidden");
    }

    await sleep(500); // SVG gira durante 500ms antes de navegar
    router.push(href);
    await sleep(500); // SVG gira otros 500ms después de navegar

    if (transitionOverlayRef.current) {
      transitionOverlayRef.current.classList.add("hidden");
    }

    await sleep(500); // Esperar a que la animación de salida termine
  };

  return (
    <>
      <div ref={transitionOverlayRef} className="transition-overlay hidden">
        <svg
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray-800 spinner"
        >
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            stopColor="#000000"
          ></path>
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            stopColor="#000000"
          ></path>
        </svg>
      </div>
      <Link {...props} href={href} onClick={handleTransition}>
        {children}
      </Link>
    </>
  );
};
