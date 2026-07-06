import { getResults, getBoxScores } from "./league";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * All scheduled + completed games
 */
export function getGames() {
  return getResults().map((g: any) => {
    const rawId = g.ID || `${g.Home}-${g.Away}-${g.Date}`;

    return {
      id: toSlug(String(rawId)),
      date: g.Date,
      home: g.Home,
      away: g.Away,
      homeScore: Number(g.HomeScore),
      awayScore: Number(g.AwayScore),
    };
  });
}

/**
 * Single game box score lookup
 */
export function getGameBoxScore(id: string) {
  const normalizedId = toSlug(id);
  const boxes = getBoxScores();

  return boxes.find((g: any) => {
    const boxId = g.ID ? String(g.ID) : `${g.Home}-${g.Away}-${g.Date}`;
    return toSlug(boxId) === normalizedId;
  });
}
