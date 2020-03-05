import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';

import { products1, products2, products3, products4 } from '../products';
import { product, productCategory } from '../products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category;
  products = productCategory;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  // products1 = products1;
  // products2 = products2;
  // products3 = products3;
  // products4 = products4;

  // selectCategory(selectedCategory): void {
  //   for (var i=0; i<4; i++){
  //     productCategory[i] = selectedCategory[i];
  //   }
  // }

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
