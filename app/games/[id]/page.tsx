import Navbar from "@/components/Navbar";
import { getGameBoxScore, getGames } from "@/lib/games";
import { notFound } from "next/navigation";

type PageProps = {
  params: { id: string };
};

export default function GamePage({ params }: PageProps) {
  const game = getGameBoxScore(params.id);
  const basic = getGames().find((g) => g.id === params.id);

  if (!basic) return notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-4xl p-8">
        <h1 className="text-4xl font-bold text-violet-500">
          {basic.away} @ {basic.home}
        </h1>
        <p className="mt-2 text-zinc-400">{basic.date}</p>
        <div className="mt-6 text-2xl font-bold">
          {basic.awayScore} - {basic.homeScore}
        </div>
        {game ? (
          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
            <h2 className="text-xl font-bold text-violet-400">Box Score</h2>
            <pre className="mt-4 text-sm text-zinc-300">
              {JSON.stringify(game, null, 2)}
            </pre>
          </div>
        ) : (
          <p className="mt-6 text-zinc-400">No detailed box score available.</p>
        )}
      </div>
    </main>
  );
}
