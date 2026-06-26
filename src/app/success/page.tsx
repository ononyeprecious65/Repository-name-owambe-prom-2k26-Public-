"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();
  const ticket = searchParams.get("ticket");

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center border border-yellow-400 p-8 rounded-xl max-w-md w-full bg-black/80">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Registration Successful 🎉
        </h1>

        <p className="text-white mb-6">
          Your Ticket Number:
        </p>

        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          {ticket || "Not Available"}
        </h2>

        <a
          href="/register"
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold"
        >
          Go Back
        </a>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-black flex items-center justify-center text-yellow-400">
          Loading...
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}