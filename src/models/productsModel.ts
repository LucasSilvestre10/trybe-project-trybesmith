import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

const postProductsModel = async (name: string, amount: string) => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const result = { id, name, amount };
  return result;
};

export default { postProductsModel };