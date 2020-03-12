import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { product, productCategory, Product} from '../products';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})

export class CategoryDetailComponent implements OnInit {
  category: Category;
  products = productCategory;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) {}

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

  // ngOnInit(): void {
  //   this.getCategory();
  // }

  // getCategory(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.categoryService.getCategories(id)
  //   .subscribe(category => this.category = category);
  // }

  // goBack(): void {
  //   this.location.back();
  // }
}
