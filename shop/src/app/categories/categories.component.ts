import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../categories-list';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;

  constructor() { }

  ngOnInit() {
  }

  onSelect(category: Category) {
    this.selectedCategory = category;
  }
}
