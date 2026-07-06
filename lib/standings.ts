import { getResults } from "./league.ts";

type TeamStats = {
  team: string;
  wins: number;
  losses: number;
  runsFor: number;
  runsAgainst: number;
};

export function calculateStandings() {
  const results = getResults();
  const teams: Record<string, TeamStats> = {};

  function init(team: string) {
    if (!teams[team]) {
      teams[team] = {
        team,
        wins: 0,
        losses: 0,
        runsFor: 0,
        runsAgainst: 0,
      };
    }
  }

  results.forEach((game: any) => {
    const home = game.Home;
    const away = game.Away;
    const homeScore = Number(game.HomeScore);
    const awayScore = Number(game.AwayScore);

    init(home);
    init(away);

    teams[home].runsFor += homeScore;
    teams[home].runsAgainst += awayScore;
    teams[away].runsFor += awayScore;
    teams[away].runsAgainst += homeScore;

    if (homeScore > awayScore) {
      teams[home].wins++;
      teams[away].losses++;
    } else {
      teams[away].wins++;
      teams[home].losses++;
    }
  });

  return Object.values(teams).sort((a, b) => {
    const pctA = a.wins / (a.wins + a.losses || 1);
    const pctB = b.wins / (b.wins + b.losses || 1);
    return pctB - pctA;
  });
}
