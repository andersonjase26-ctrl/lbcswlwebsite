import Navbar from "@/components/Navbar";

export default function Transactions() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-violet-500">Transactions</h1>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-zinc-300">
            Transactions from Excel will appear here (trades, roster moves, etc.)
          </p>
        </div>
      </div>
    </main>
  );
}
