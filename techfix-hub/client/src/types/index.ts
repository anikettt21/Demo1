export interface Product {
  id: number;
  name: string;
  category: 'laptop' | 'pc' | 'accessories' | 'components';
  condition: 'new' | 'used';
  price: number;
  description: string;
  image_url: string;
  created_at: string;
}

export interface RepairRequest {
  id: number;
  customer_name: string;
  phone: string;
  email: string;
  device_type: 'laptop' | 'pc' | 'other';
  problem: string;
  image_url?: string;
  created_at: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  price?: number;
}