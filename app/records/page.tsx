import Navbar from "@/components/Navbar";

export default function RecordsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-violet-500">Records</h1>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-zinc-300">
            Records will be pulled from your Excel “Player Records” and “Team Records” sheets in the next update.
          </p>
        </div>
      </div>
    </main>
  );
}
