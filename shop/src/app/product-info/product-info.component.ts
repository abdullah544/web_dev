import { Component, OnInit } from '@angular/core';
import { productCategory } from '../products';
import { Category } from '../category';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  category: Category;
  products = productCategory;

  constructor() { }

  ngOnInit(): void {
  }

}
