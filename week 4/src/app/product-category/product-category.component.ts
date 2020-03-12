import { Component, OnInit } from '@angular/core';
import { products1, products2, products3, products4, productCategory } from '../products';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  constructor() { }

  category=productCategory;

  products1 = products1;
  products2 = products2;
  products3 = products3;
  products4 = products4;

  selectCategory(selectedCategory): void {
    for (var i=0; i<ProductCategoryComponent.length; i++){
      productCategory[i] = selectedCategory[i];
    }
  }

  ngOnInit(): void {
  }

}
