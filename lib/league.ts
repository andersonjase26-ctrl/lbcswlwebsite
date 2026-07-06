import { readSheet } from "./excel";

/**
 * RESULTS → used for standings + schedule
 */
export function getResults() {
  return readSheet("Results");
}

/**
 * TOTAL STATS → player stats + leaders
 */
export function getTotalStats() {
  return readSheet("Total Stats");
}

/**
 * ROSTERS → team pages
 */
export function getRosters() {
  return readSheet("Rosters");
}

/**
 * BOX SCORES → game pages
 */
export function getBoxScores() {
  return readSheet("Box Scores");
}

/**
 * AWARDS
 */
export function getAwards() {
  return readSheet("Awards");
}
