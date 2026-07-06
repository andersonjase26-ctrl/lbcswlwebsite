import Navbar from "@/components/Navbar";
import { getPlayers } from "@/lib/players";
import { notFound } from "next/navigation";

type PageProps = {
  params: { name: string };
};

export default function PlayerPage({ params }: PageProps) {
  const players = getPlayers();
  const player = players.find(
    (p) => p.name.toLowerCase().replaceAll(" ", "-") === params.name,
  );

  if (!player) return notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-4xl p-8">
        <h1 className="text-5xl font-bold text-violet-500">{player.name}</h1>
        <p className="mt-2 text-zinc-400">{player.team}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Stat label="AVG" value={player.avg.toFixed(3)} />
          <Stat label="HR" value={player.hr} />
          <Stat label="RBI" value={player.rbi} />
        </div>
      </div>
    </main>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
      <p className="text-zinc-400">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
