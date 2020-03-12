import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;

  constructor(private categoryService: CategoryService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
    this.messageService.add(`CategoryService: Selected category id=${category.id}`);
  }

  getCategories(): void {
    this.categoryService.getCategory()
    .subscribe(categories => this.categories = categories);
  }
}