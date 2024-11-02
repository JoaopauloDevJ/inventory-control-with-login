import mysql, { Connection } from "mysql";

const connection: Connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "admin",
    password: "admin",
    database: "controle_estoque"
});

export default connection;