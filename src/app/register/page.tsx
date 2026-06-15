"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    class: "",
  });

  const [loading, setLoading] = useState(false);
  const [paymentFile, setPaymentFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentFile) {
      alert("Please upload a payment screenshot.");
      return;
    }

    setLoading(true);

    try {
      console.log("STEP 1");

      const fileName = `${Date.now()}-${paymentFile.name}`;

      console.log("STEP 2");

      const { error: uploadError } = await supabase.storage
        .from("payment-proofs")
        .upload(fileName, paymentFile);

      if (uploadError) {
        console.error("UPLOAD ERROR:", uploadError);
        alert(uploadError.message);
        setLoading(false);
        return;
      }

      console.log("STEP 3");

      const { data: publicUrlData } = supabase.storage
        .from("payment-proofs")
        .getPublicUrl(fileName);

      const ticketNumber = `OWP-2026-${Date.now()
        .toString()
        .slice(-6)}`;

      console.log("STEP 4");

      const { error: insertError } = await supabase
        .from("registrations")
        .insert([
          {
            full_name: formData.full_name,
            email: formData.email,
            phone: formData.phone,
            class: formData.class,
            payment_proof: publicUrlData.publicUrl,
            ticket_number: ticketNumber,
          },
        ]);

      if (insertError) {
        console.error("DATABASE ERROR:", insertError);
        alert(insertError.message);
        setLoading(false);
        return;
      }

      console.log("STEP 5");

      window.location.href = `/success?ticket=${ticketNumber}`;
    } catch (error) {
      console.error("GENERAL ERROR:", error);
      alert("Registration failed.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-black/70 border-2 border-yellow-400 rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-yellow-400 text-center">
          OWAMBE PROM 2K26
        </h1>

        <p className="text-center text-gray-300 mt-2 mb-8">
          Ticket Registration Form
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white text-black"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white text-black"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white text-black"
            required
          />

          <input
            type="text"
            name="class"
            placeholder="Class"
            value={formData.class}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white text-black"
            required
          />

          <div className="border border-yellow-400 rounded-xl p-5">
            <p>
              <strong>Bank:</strong> Fidelity Bank
            </p>

            <p>
              <strong>Account Name:</strong> Noble Vine Schools
            </p>

            <p>
              <strong>Account Number:</strong> 4150015827
            </p>

            <p className="text-yellow-400 font-bold mt-4">
              Amount: ₦10,000
            </p>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setPaymentFile(e.target.files?.[0] ?? null)
            }
            className="w-full p-3 rounded bg-white text-black"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black py-3 rounded font-bold"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </main>
  );
}