import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardCard from "@/components/DashboardCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-8 py-16">
        <h1 className="text-6xl font-extrabold text-violet-500">LBCSWL</h1>
        <p className="mt-4 text-2xl text-zinc-300">
          Lean Bean Cream Squad Wiffleball League
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <DashboardCard title="League Standings">
            <p>Standings will appear here.</p>
          </DashboardCard>
          <DashboardCard title="League Leaders">
            <p>Top players will appear here.</p>
          </DashboardCard>
          <DashboardCard title="Next Game">
            <p>Schedule coming soon.</p>
          </DashboardCard>
          <DashboardCard title="Latest Results">
            <p>Game results coming soon.</p>
          </DashboardCard>
        </div>
      </section>
      <Footer />
    </main>
  );
}
