import Navbar from "@/components/Navbar";

export default function Rules() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-violet-500">Rules</h1>
        <div className="space-y-3 rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-zinc-300">
          <p>• Standard wiffleball rules apply</p>
          <p>• 3 strikes = out</p>
          <p>• 4 balls = walk</p>
          <p>• Home run = over fence / designated distance</p>
          <p>• Stats tracked per Excel workbook</p>
        </div>
      </div>
    </main>
  );
}
