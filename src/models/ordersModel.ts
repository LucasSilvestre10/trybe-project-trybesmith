import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../types/order';

const getAllOrdersModel = async (): Promise<Order[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT orders.id, orders.user_id AS userId,
        JSON_ARRAYAGG(products.id) AS productsIds
        FROM Trybesmith.orders
        JOIN Trybesmith.products ON orders.id = products.order_id
        GROUP BY orders.id, orders.user_id`,
  );
    
  return result as Order[];
};

export default { getAllOrdersModel };