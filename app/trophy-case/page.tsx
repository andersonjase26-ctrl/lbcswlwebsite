import Navbar from "@/components/Navbar";
import { getTrophies } from "@/lib/leagueExtra";

export default function TrophyCase() {
  const trophies = getTrophies();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-violet-500">Trophy Case</h1>
        <div className="space-y-3">
          {trophies.map((t: any, i: number) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="font-bold text-violet-400">{t.Type}</p>
              <p>{t.Team}</p>
              <p className="text-sm text-zinc-400">{t.Season}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
