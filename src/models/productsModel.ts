import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../types/product';

const postProductsModel = async (name: string, amount: string) => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const result = { id, name, amount };
  return result;
};

const getAllProductsModel = async (): Promise<Product[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.products');
  return result as Product[];
};

export default { postProductsModel, getAllProductsModel };