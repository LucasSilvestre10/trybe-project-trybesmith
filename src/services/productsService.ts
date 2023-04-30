import productsModel from '../models/productsModel';
import { Product } from '../types/product';

const postProductsService = async (name: string, amount: string): Promise<Product> => {
  const result = await productsModel.postProductsModel(name, amount);
  return result;
};

export default { postProductsService };