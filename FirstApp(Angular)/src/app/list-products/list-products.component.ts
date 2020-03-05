import { Component, OnInit } from '@angular/core';
import { product, productCategory, Product } from '../products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products = productCategory;

  constructor() { }

  ngOnInit() {
  }

  selectProduct(selectedProduct): void {
    product.name = selectedProduct.name;
    product.price = selectedProduct.price;
    product.description = selectedProduct.description;
    product.rating = selectedProduct.rating;
    product.link = selectedProduct.link;
    product.image = selectedProduct.image;
    product.categoryId = selectedProduct.categoryId;
    product.productId = selectedProduct.productId;
  }

}