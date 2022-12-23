export interface Goods {
  id: number;
  img_src: string;
  title: string;
  alt: string;
  about: string;
}

export interface OrderGood {
  id: number;
  amount: number;
}

export interface Order {
  orderStaff: OrderStaff;
  orderClient: OrderClient;
}

export interface OrderStaff {
  [key: number]: number
}

export interface OrderClient {
  name: string;
  address: string;
  phone: string;
}
