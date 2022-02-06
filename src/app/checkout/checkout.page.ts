import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  public cartItems = [];

  constructor(
    private cart: CartService,
  ) { }

  ngOnInit() {
    this.cartItems = this.cart.getItems();
  }

}
