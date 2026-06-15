"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Registration = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  class: string;
  ticket_number: string;
  payment_proof: string;
};

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filtered, setFiltered] = useState<Registration[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  useEffect(() => {
    const results = registrations.filter(
      (reg) =>
        reg.full_name.toLowerCase().includes(search.toLowerCase()) ||
        reg.ticket_number.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(results);
  }, [search, registrations]);

  async function fetchRegistrations() {
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setRegistrations(data || []);
    setFiltered(data || []);
    setLoading(false);
  }

  async function deleteRegistration(id: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this registration?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("registrations")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchRegistrations();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-yellow-400 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-4">
        Admin Dashboard
      </h1>

      <p className="text-center mb-6">
        Total Registrations: {registrations.length}
      </p>

      <input
        type="text"
        placeholder="Search by name or ticket number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded text-black mb-6"
      />

      <div className="overflow-x-auto">
        <table className="w-full border border-yellow-400">
          <thead>
            <tr className="bg-yellow-400 text-black">
              <th className="p-3">Name</th>
              <th className="p-3">Ticket Number</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Payment Proof</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((reg) => (
              <tr key={reg.id} className="border-t border-yellow-400">
                <td className="p-3">{reg.full_name}</td>
                <td className="p-3">{reg.ticket_number}</td>
                <td className="p-3">{reg.phone}</td>

                <td className="p-3">
                  <a
                    href={reg.payment_proof}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 underline"
                  >
                    View Proof
                  </a>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => deleteRegistration(reg.id)}
                    className="bg-red-600 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}