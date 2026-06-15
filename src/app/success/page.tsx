"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const ticket = searchParams.get("ticket");

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center border border-yellow-400 p-8 rounded-xl max-w-md w-full bg-black/80">
        
        <h1 className="text-3xl text-yellow-400 font-bold mb-4">
          Registration Successful 🎉
        </h1>

        <p className="text-white mb-6">
          Your Ticket Number:
        </p>

        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          {ticket}
        </h2>

        <a
          href="/register"
          className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold"
        >
          Go Back
        </a>

      </div>
    </main>
  );
}