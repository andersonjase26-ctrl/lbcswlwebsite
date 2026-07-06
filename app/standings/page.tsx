import { calculateStandings } from "@/lib/standings";
import StandingsTable from "@/components/StandingsTable";
import Navbar from "@/components/Navbar";

export default function StandingsPage() {
  const standings = calculateStandings();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-6xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-violet-500">Standings</h1>
        <StandingsTable teams={standings} />
      </div>
    </main>
  );
}
