import { getAwards, getRosters, getResults } from "./league";

/**
 * AWARDS (MVP, Cy Young, etc.)
 */
export function getLeagueAwards() {
  return getAwards();
}

/**
 * TEAM ROSTERS
 */
export function getTeams() {
  return getRosters();
}

/**
 * GAME HISTORY
 */
export function getGameHistory() {
  return getResults();
}

/**
 * TROPHY CASE / CHAMPIONS
 */
export function getTrophies() {
  return getAwards().filter((a: any) =>
    a.Type?.toLowerCase().includes("champ"),
  );
}
