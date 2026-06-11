export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-black/70 border-2 border-yellow-400 rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-yellow-400 text-center">
          OWAMBE PROM 2K26
        </h1>

        <p className="text-center text-gray-300 mt-2 mb-8">
          Ticket Registration Form
        </p>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg text-black"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg text-black"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg text-black"
            required
          />

          <input
            type="text"
            placeholder="Class"
            className="w-full p-3 rounded-lg text-black"
            required
          />

          <div className="border border-yellow-400 rounded-xl p-5">
            <h2 className="text-yellow-400 text-xl font-bold mb-3">
              Payment Details
            </h2>

            <p>
              <strong>Bank:</strong> Fidelity Bank
            </p>

            <p>
              <strong>Account Name:</strong> Noble Vine Schools
            </p>

            <p>
              <strong>Account Number:</strong> 4150015827
            </p>

            <p className="text-yellow-400 font-bold mt-4 text-xl">
              Amount: ₦10,000
            </p>
          </div>

          <div>
            <label className="block mb-2 text-yellow-400 font-semibold">
              Upload Payment Screenshot
            </label>

            <input
              type="file"
              className="w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:scale-105 transition"
          >
            Submit Registration
          </button>

        </form>

        <p className="text-center mt-6 text-yellow-400 font-bold">
          No Ticket, No Entry
        </p>

      </div>
    </main>
  );
}