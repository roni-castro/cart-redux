import api from "./api";
import { ProductResponse, StockResponse } from "./cartModels";

export async function getProducts(): Promise<ProductResponse[]> {
  const response = await api.get<ProductResponse[]>("products");
  return response.data;
}

export async function getStocks(): Promise<StockResponse[]> {
  const response = await api.get<StockResponse[]>("stock");
  return response.data;
}

export async function getStockById(
  id: number
): Promise<StockResponse | undefined> {
  const { data } = await api.get<StockResponse[]>("stock");
  const productStock = data.find((stock) => stock.id === id);
  return productStock;
}
