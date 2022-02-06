import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  public cartItems = [];

  constructor(
    private cart: CartService,
  ) { }

  ngOnInit() {
    this.cartItems = this.cart.getItems();
  }
}
