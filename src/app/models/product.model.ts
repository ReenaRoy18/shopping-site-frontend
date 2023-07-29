import { Category } from './category.model';

export class Product {
  name: string;
  description: string;
  category: Category;
  price: number;
  offer: string;
  unit: string;
  inStock: string;
  quantity: number;
  constructor(
    name: string,
    description: string,
    category: Category,
    price: number,
    offer: string,
    unit: string,
    inStock: string,
    quantity: number
  ) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.offer = offer;
    this.unit = unit;
    this.inStock = inStock;
    this.quantity = quantity;
  }
}
