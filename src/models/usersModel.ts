import { ResultSetHeader } from 'mysql2';
import { User } from '../types/users';
import connection from './connection';

const postUsers = async (user: User): Promise<number> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.vocation, user.level, user.password],
  );
  return id;
};
  
export default { postUsers };