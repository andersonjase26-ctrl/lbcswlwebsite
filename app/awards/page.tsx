import Navbar from "@/components/Navbar";
import { getLeagueAwards } from "@/lib/leagueExtra";

export default function AwardsPage() {
  const awards = getLeagueAwards();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-violet-500">Awards</h1>
        <div className="space-y-3">
          {awards.map((a: any, i: number) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="font-bold text-violet-400">{a.Type}</p>
              <p className="text-white">{a.Player}</p>
              <p className="text-sm text-zinc-400">{a.Team}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
