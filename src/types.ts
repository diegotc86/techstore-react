export type Product = {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
  stock: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Cart = CartItem[];

export type User = {
  id: number;
  username: string;
  email: string;
};
