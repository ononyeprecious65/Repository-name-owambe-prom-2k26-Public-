export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center p-6">
      <h1 className="text-yellow-400 font-bold text-xl">
        OWAMBE PROM 2K26
      </h1>

      <a
        href="https://wa.me/2348167919846"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold"
      >
        Buy Tickets
      </a>
    </nav>
  );
}