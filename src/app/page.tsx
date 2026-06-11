import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/prom-bg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-4xl md:text-7xl font-bold text-yellow-400">
          OWAMBE PROM 2K26
        </h1>

        <p className="mt-4 text-white text-lg md:text-2xl">
          Welcome to the Biggest Prom Experience
        </p>

        <Countdown />

        <a
          href="/register"
          className="mt-8 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
        >
          Get Tickets
        </a>

        {/* Event Details */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
          <div className="bg-black/60 border border-yellow-400 rounded-xl p-4 text-center text-white">
            <h3 className="text-yellow-400 font-bold">DATE</h3>
            <p>Wednesday</p>
            <p>August 12, 2026</p>
          </div>

          <div className="bg-black/60 border border-yellow-400 rounded-xl p-4 text-center text-white">
            <h3 className="text-yellow-400 font-bold">TIME</h3>
            <p>3:00 PM - 8:00 PM</p>
          </div>

          <div className="bg-black/60 border border-yellow-400 rounded-xl p-4 text-center text-white">
            <h3 className="text-yellow-400 font-bold">GATE FEE</h3>
            <p className="text-2xl font-bold text-yellow-400">₦10K</p>
          </div>

          <div className="bg-black/60 border border-yellow-400 rounded-xl p-4 text-center text-white">
            <h3 className="text-yellow-400 font-bold">EXPECT</h3>
            <p>Great Music</p>
            <p>Good Food</p>
            <p>Unforgettable Memories</p>
          </div>
        </div>

        <p className="mt-4 text-yellow-400 text-xl italic font-bold animate-pulse">
          ✨ No Ticket, No Entry ✨
        </p>
      </div>

      {/* Venue Section */}
      <section className="relative z-10 py-12 px-4">
        <h2 className="text-center text-yellow-400 text-3xl font-bold mb-6">
          Venue
        </h2>

        <div className="max-w-2xl mx-auto bg-black/60 border border-yellow-400 rounded-2xl p-6 text-center">
          <img
            src="/logo.png"
            alt="Noble Vine College"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />

          <h3 className="text-yellow-400 text-2xl font-bold">
            Noble Vine College
          </h3>

          <p className="text-white mt-4">
            📍 39, Solo-Ogun Street
            <br />
            Aguda, Surulere
            <br />
            Lagos, Nigeria
          </p>

          <a
            href="https://maps.google.com/?q=39+Solo-Ogun+Street+Aguda+Surulere+Lagos+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
          >
            View Location 📍
          </a>
        </div>
      </section>

      {/* Enquiries */}
      <section className="relative z-10 py-12 px-4">
        <h2 className="text-center text-yellow-400 text-3xl font-bold mb-6">
          Enquiries
        </h2>

        <div className="max-w-3xl mx-auto bg-black/60 border border-yellow-400 rounded-2xl p-6 text-center text-white">
          <p className="text-lg mb-3">📞 +234 816 791 9846</p>

          <p className="text-lg mb-3">📞 +234 913 176 9319</p>

          <p className="text-yellow-400 font-semibold">
            For enquiries and information only.
          </p>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/2348167919846"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg font-bold hover:scale-110 transition"
      >
        💬 WhatsApp Us
      </a>
    </main>
  
);
}