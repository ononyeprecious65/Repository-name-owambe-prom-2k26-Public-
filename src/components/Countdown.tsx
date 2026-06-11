"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-08-12T15:00:00").getTime();

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setMounted(true);

    const updateCountdown = () => {
      setTimeLeft(targetDate - Date.now());
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (timeLeft % (1000 * 60)) / 1000
  );

  return (
    <div className="mt-8 flex gap-4 flex-wrap justify-center">
      <div className="bg-black/60 border border-yellow-400 rounded-lg p-4">
        <h2 className="text-3xl font-bold text-yellow-400">{days}</h2>
        <p className="text-white">Days</p>
      </div>

      <div className="bg-black/60 border border-yellow-400 rounded-lg p-4">
        <h2 className="text-3xl font-bold text-yellow-400">{hours}</h2>
        <p className="text-white">Hours</p>
      </div>

      <div className="bg-black/60 border border-yellow-400 rounded-lg p-4">
        <h2 className="text-3xl font-bold text-yellow-400">{minutes}</h2>
        <p className="text-white">Minutes</p>
      </div>

      <div className="bg-black/60 border border-yellow-400 rounded-lg p-4">
        <h2 className="text-3xl font-bold text-yellow-400">{seconds}</h2>
        <p className="text-white">Seconds</p>
      </div>
    </div>
  );
}