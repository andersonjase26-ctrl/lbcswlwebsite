import Navbar from "@/components/Navbar";
import { getGames } from "@/lib/games";

export default function SchedulePage() {
  const games = getGames();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-violet-500">
          Schedule & Results
        </h1>
        <div className="space-y-3">
          {games.map((g) => (
            <div
              key={g.id}
              className="flex justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-4"
            >
              <div>
                <p className="text-sm text-zinc-400">{g.date}</p>
                <p className="font-semibold">
                  {g.away} @ {g.home}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-violet-400">
                  {g.awayScore} - {g.homeScore}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
