import { Request, Response } from 'express';
import usersServices from '../services/usersServices';

const postUsers = async (request: Request, response: Response): Promise<Response> => {
  const { username, vocation, level, password } = request.body;
  const result = await usersServices.postUsers(username, vocation, level, password);
  return response.status(201).json({ token: result });
};

export default { postUsers };