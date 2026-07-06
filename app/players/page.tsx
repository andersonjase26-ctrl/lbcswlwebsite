import Navbar from "@/components/Navbar";
import { getPlayers } from "@/lib/players";

export default function PlayersPage() {
  const players = getPlayers();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-6xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-violet-500">Players</h1>
        <div className="grid gap-4 md:grid-cols-3">
          {players.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
            >
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="text-sm text-zinc-400">{p.team}</p>
              <div className="mt-3 space-y-1 text-sm">
                <p>AVG: {p.avg.toFixed(3)}</p>
                <p>HR: {p.hr}</p>
                <p>RBI: {p.rbi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
