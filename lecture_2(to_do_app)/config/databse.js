const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// mysql2 → MySQL database se connect karne ke liye driver.
// dotenv.config() → .env file ke andar likhe huye variables (DB_HOST, DB_USER, etc.) ko load kar deta hai.

// Connection pool create karna
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
// Pool ka matlab: multiple clients ek sath MySQL ko request bhej sakte hain, aur har ek ke liye naya connection banane ki zarurat nahi padti.

// Promise based pool banate hain taki async/await use kar saken
const db = pool.promise();

(async () => {
  try {
    await db.query("SELECT 1"); // Dummy query to test connection
    console.log("Connected to MySQL Database");
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1);
  }
})();

module.exports = db;
