export class Product {
  id: number;
  name: string;
  image: string;
  price: number;
  type: {
    dimension: string;
    technique: string;
    type: string;
  };
  description: string;
  new: boolean;
  quantity: number;
}
