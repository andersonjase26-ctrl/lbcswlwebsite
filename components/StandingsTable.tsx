type Props = {
  teams: {
    team: string;
    wins: number;
    losses: number;
    runsFor: number;
    runsAgainst: number;
  }[];
};

export default function StandingsTable({ teams }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-zinc-900 text-violet-400">
          <tr>
            <th className="p-3">Team</th>
            <th>W</th>
            <th>L</th>
            <th>Win%</th>
            <th>RF</th>
            <th>RA</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((t) => {
            const pct = t.wins / (t.wins + t.losses || 1);
            return (
              <tr key={t.team} className="border-t border-zinc-800">
                <td className="p-3 font-semibold">{t.team}</td>
                <td>{t.wins}</td>
                <td>{t.losses}</td>
                <td>{pct.toFixed(3)}</td>
                <td>{t.runsFor}</td>
                <td>{t.runsAgainst}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
