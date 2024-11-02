import { Router } from "express";
import { Request, Response } from "express";
import product from "../Controller/ProductController";
const router = Router();

router.get("/product", (req: Request, res: Response) => {
    const productList = product.research();
    productList.then(product => res.status(200).json(product))
    .catch((error) => res.status(400).json(error.nessage))
});

router.post("/product", (req: Request, res: Response) => {
    const newProduct = req.body;
    const saveProduct = product.save(newProduct);
    saveProduct.then(productSaved => res.status(201).json(saveProduct))
    .catch(error => res.status(400).json(error.message));
});

router.put("/product/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const response = product.edit(id)
    res.send(response);
});

router.delete("/product/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const response = product.delete(id)
    res.send(response);
});

export default router;