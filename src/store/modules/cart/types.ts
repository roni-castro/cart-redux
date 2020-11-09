export interface ICartProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: ICartProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
