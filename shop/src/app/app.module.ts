import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductsComponent,
    ProductInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: CategoriesComponent },
      { path: 'categories', component: CategoryComponent},
      { path: 'categories/:categoryId/products', component: ProductsComponent},
      { path: 'products/:productId', component: ProductInfoComponent}
    ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
