import { Express } from 'express';
import productRouter from './productRouter';

export default((app: Express) => {
    app.use(productRouter);
})