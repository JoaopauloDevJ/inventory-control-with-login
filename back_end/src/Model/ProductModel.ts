import { Connection } from "mysql";
import connection from "../DataBase/connectionMysql";
import { Product } from "../Controller/ProductController";

class ProductModel {
    connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    list() {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM controle_estoque.tb_estoque";

            connection.query(sql, (error, response) => {
                if (error) {
                    console.log("Deu erro ao listar...")
                    reject();
                }
    
                console.log("Não deu erro");
                resolve(response);
            });
        })
    }

    create(newProduct: Product): Promise<Product> {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO controle_estoque.tb_estoque 
                    (name, value, description, quantity) VALUE (? ? ? ?)`;

            const values = [
                newProduct.name,
                newProduct.value,
                newProduct.description,
                newProduct.quantity
            ]

            console.log("valores inseridos: " + values)
            connection.query(sql, values, (error, result) => {
                if(error) {
                    console.log("Deu erro ao criar o produto")
                    reject(error);
                }
                
                console.log("criou produto")
                resolve(newProduct);
            })
        })
    }
}

const productmodel = new ProductModel(connection);

export default productmodel;