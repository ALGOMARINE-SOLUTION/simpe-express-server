import mysql from "mysql";

export async function query(sql: string, params: string[]) {
  const connection = mysql.createConnection({
    host: 'localhost',
    database: 'diklat_database',
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  });

  const results = connection.query(sql, params);

  return results;
}