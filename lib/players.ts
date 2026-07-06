import { getTotalStats } from "./league";

export function getPlayers() {
  const stats = getTotalStats();
  return stats.map((p: any) => ({
    name: p.Player,
    team: p.Team || "Free Agent",
    avg: Number(p.AVG || 0),
    hr: Number(p.HR || 0),
    rbi: Number(p.RBI || 0),
    hits: Number(p.HITS || 0),
    runs: Number(p.R || 0),
  }));
}
