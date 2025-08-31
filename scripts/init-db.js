import mysql from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function init() {
  try {
    const db = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      ssl: { rejectUnauthorized: false }, // needed for Railway
    });

    await db.query(`
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name TEXT NOT NULL,
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        contact VARCHAR(20) NOT NULL,
        email_id TEXT NOT NULL,
        image TEXT
      );
    `);

    console.log("✅ Schools table created or already exists.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

init();
