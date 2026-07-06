import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

const FILE_PATH = path.resolve(process.cwd(), "data", "LBCSWL Database.xlsx");

function getWorkbook() {
  const buffer = fs.readFileSync(FILE_PATH);
  return XLSX.read(buffer);
}

// Generic sheet reader
export function readSheet(sheetName: string) {
  const wb = getWorkbook();
  const sheet = wb.Sheets[sheetName];
  if (!sheet) {
    throw new Error(`Sheet not found: ${sheetName}`);
  }
  return XLSX.utils.sheet_to_json(sheet, { defval: "" });
}
