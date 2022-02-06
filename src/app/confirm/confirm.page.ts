import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  constructor(
    private cart: CartService,
  ) { }

  ngOnInit() {
    this.cart.cleanCart();
  }
}
