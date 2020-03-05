import { Component, OnInit } from '@angular/core';
import { product, productCategory, Product } from '../products';
import { products1, products2, products3, products4 } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = productCategory;
  
  // category = productCategory;

  // products1 = products1;
  // products2 = products2;
  // products3 = products3;
  // products4 = products4;

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
