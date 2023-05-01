import ordersModel from '../models/ordersModel';
import { Order } from '../types/order';

const getAllOrdersService = async (): Promise<Order[]> => {
  const result = await ordersModel.getAllOrdersModel();
  return result;
};

export default { getAllOrdersService };