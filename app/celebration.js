"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Celebration() {
  const [size, setSize] = useState(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (complete || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [complete]);

  if (!size || complete) return null;

  return (
    <Confetti
      {...size}
      recycle={false}
      numberOfPieces={250}
      onConfettiComplete={() => setComplete(true)}
      style={{ position: "fixed", pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
