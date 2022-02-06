import { Injectable } from '@angular/core';
import { IProduct } from './data.service';

export interface CartItem {
  product: IProduct;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private items = [];
  private cartItemCount = 0;

  getItems(): CartItem[] {
    console.log("this.cart: ", this.items);
    return this.items;
  }

  getNumberOfItems(): number {
    let number = 0;
    for (let item of this.items) {
      number = number + item.amount;
    }
    return number;
  }

  getCartItemCount(): number {
    return this.cartItemCount;
  }

  addProduct(product: IProduct) {
    let added = false;
    for (let item of this.items) {
      if (item.product.id === product.id) {
        item.amount += 1;
        added = true;
        console.log(`product ${product.name} incremented in the cart`);
        break;
      }
    }
    if (!added) {
      let newItem: CartItem = {
        product: product,
        amount: 1
      }
      this.items.push(newItem);
      console.log(`product ${product.name} pushed to cart`);
    }
    this.cartItemCount++;
  }

  getSubtotal(): number {
    let subtotal = 0;
    for (let item of this.items) {
      subtotal = subtotal + item.product.price * item.amount;
    }
    return subtotal;
  }

  getPercentageDiscount(): number {
    return 5;
  }

  getShipping(): number {
    return 10;
  }

  getTotal(): number {
    return this.getSubtotal() - this.getPercentageDiscount() - this.getShipping();
  }

  cleanCart(){
    this.items = [];
  }
}
