import mysql, { MysqlError, FieldInfo } from "mysql";

let connection: any = {}

try {
  connection = mysql.createConnection({
    host: 'localhost',
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  });
  
} catch(error) {
  console.log(error)
}

export function query(sql: string, params: string[]) {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (error:MysqlError | null, result?: any, fields?: FieldInfo[] ) => {
      if(error) reject(error)
      resolve(result)
    });
  })
}