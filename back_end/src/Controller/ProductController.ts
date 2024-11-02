import productModel from "../Model/ProductModel";

export type Product = {
    name: string
    value: number
    description: string
    image: string
    quantity: number
}

interface IProductController {
    save(newProduct: Product) : Promise<Product>
}

class ProductController implements IProductController {
    save(newProduct: Product): Promise<Product> {
        return productModel.create(newProduct);
    }

    edit(id: string) {
        console.log("ediatando produto" + id);
    }

    research() {
        return productModel.list();
    }

    delete(id: string) {
        console.log("apagando produto" + id);
    }
};

const product = new ProductController();

export default product;