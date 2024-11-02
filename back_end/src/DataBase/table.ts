import { Connection } from "mysql";
import connection from "./connectionMysql";

class Table {
    connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    createTableEstoque() {
        const sql = `
        CREATE TABLE IF NOT EXISTS controle_estoque.tb_estoque (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) NOT NULL,
        value INT NOT NULL,
        description VARCHAR(150) NOT NULL,
        quantity INT NOT NULL,
        image BLOB NULL,
        PRIMARY KEY (id),
        UNIQUE INDEX id_UNIQUE (id ASC));
        `

        this.connection.query(sql, (error) => {
            if(error) {
                console.log("Erro ao criar a tabela, Error: " + error.message)
                return;
            }

            console.log("Criou a tabela");
        })
    }

    researchTableEstoque() {
        const sql = `
        SELECT * FROM controle_estoque.tb_estoque;
        `

        this.connection.query(sql, (error) => {
            if(error) {
                console.log("Erro ao consultar tabela" + error);
                return;
            }

            console.log("tabela consultada");
        })
    }
};

const tables = new Table(connection);
tables.createTableEstoque();
tables.researchTableEstoque();

export default tables;