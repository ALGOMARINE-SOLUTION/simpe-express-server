import mysql from "mysql";

export const connection = mysql.createConnection({
  host: 'localhost',
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || ''),
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});

export async function query(sql: string, params: string[]) {
  const results = connection.query(sql, params);

  return results;
}