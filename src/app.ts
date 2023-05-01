import express from 'express';
import productsRouter from './routers/productsRouter';
import usersRouter from './routers/usersRouter';
import ordersRouter from './routers/ordersRouter';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(usersRouter);
app.use(ordersRouter);

export default app;
