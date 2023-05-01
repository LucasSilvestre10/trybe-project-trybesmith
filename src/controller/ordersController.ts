import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAllOrders = async (request: Request, response: Response): Promise<Response> => {
  const result = await ordersService.getAllOrdersService();
  return response.status(200).json(result);
};

export default { getAllOrders };