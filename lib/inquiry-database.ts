import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import path from "node:path";

type DatabaseGlobal = typeof globalThis & {
  inquiryDatabase?: Database.Database;
};

const globalForDatabase = globalThis as DatabaseGlobal;

function createDatabase() {
  const dataDirectory = path.join(process.cwd(), ".data");
  mkdirSync(dataDirectory, { recursive: true });

  const database = new Database(path.join(dataDirectory, "inquiries.sqlite"));
  database.pragma("journal_mode = WAL");
  database.pragma("busy_timeout = 5000");
  database.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return database;
}

export const inquiryDatabase = globalForDatabase.inquiryDatabase ?? createDatabase();
globalForDatabase.inquiryDatabase = inquiryDatabase;