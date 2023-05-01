import { Request, Response } from 'express';
import productsService from '../services/productsService';

const postProducts = async (request: Request, response: Response): Promise<Response> => { 
  const { name, amount } = request.body;
  const result = await productsService.postProductsService(name, amount);
  return response.status(201).json(result);
}; 

const getAllProducts = async (request: Request, response: Response): Promise<Response> => { 
  const result = await productsService.getAllProducts();
  return response.status(200).json(result);
};
export default { postProducts, getAllProducts };  