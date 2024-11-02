import express from "express";

import router from "./Routes";
import connection from "./DataBase/connectionMysql";
import table from "./DataBase/table";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

table.connection;

const port  = 4000;

router(app);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})