import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Database from "better-sqlite3";

const app = express();
const PORT = 3000;

// Database Setup
const db = new Database("salon.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    service TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

app.use(express.json());

// API Routes
app.post("/api/bookings", (req, res) => {
  const { name, phone, email, date, time, service } = req.body;
  try {
    const stmt = db.prepare("INSERT INTO bookings (name, phone, email, date, time, service) VALUES (?, ?, ?, ?, ?, ?)");
    stmt.run(name, phone, email, date, time, service);
    res.status(201).json({ message: "Booking received successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save booking." });
  }
});

app.post("/api/contacts", (req, res) => {
  const { name, email, message } = req.body;
  try {
    const stmt = db.prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
    stmt.run(name, email, message);
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

// Vite middleware for development
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

setupVite();
