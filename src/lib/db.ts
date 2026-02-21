import Database from 'better-sqlite3';
import path from 'path';

// Create database connection (in-memory for now)
const dbPath = process.env.DATABASE_PATH || ':memory:';
const db = new Database(dbPath);

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL');

// Create contacts table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    phone TEXT,
    service TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: number;
  created_at: string;
}

export function createContact(data: ContactFormData): ContactSubmission {
  const stmt = db.prepare(`
    INSERT INTO contacts (name, email, company, phone, service, message)
    VALUES (?, ?, ?, ?, ?, ?)
    RETURNING *
  `);
  
  const result = stmt.get(
    data.name,
    data.email,
    data.company || null,
    data.phone || null,
    data.service || null,
    data.message
  ) as ContactSubmission;
  
  return result;
}

export function getAllContacts(): ContactSubmission[] {
  const stmt = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC');
  return stmt.all() as ContactSubmission[];
}

export function getContactById(id: number): ContactSubmission | null {
  const stmt = db.prepare('SELECT * FROM contacts WHERE id = ?');
  const result = stmt.get(id) as ContactSubmission | undefined;
  return result || null;
}

export default db;