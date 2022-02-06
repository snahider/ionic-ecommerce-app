import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IProduct,DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];

  constructor(
    private data: DataService,
    private cart: CartService,
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();
  }

  addToCart(product: IProduct) {
		this.cart.addProduct(product);
	}

}
