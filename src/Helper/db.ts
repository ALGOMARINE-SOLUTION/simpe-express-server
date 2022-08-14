import mysql, { MysqlError, FieldInfo } from "mysql";

export const connection = mysql.createConnection({
  host: 'localhost',
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || ''),
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});

export function query(sql: string, params: string[]) {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (error:MysqlError | null, result?: any, fields?: FieldInfo[] ) => {
      if(error) reject(error)
      resolve(result)
    });
  })
}