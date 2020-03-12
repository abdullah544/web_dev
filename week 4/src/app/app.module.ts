import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'categories', component: ProductCategoryComponent},
      { path: 'categories/:categoryId/:products', component: ListProductsComponent},
      { path: 'products/productId', component: ProductInfoComponent}
    ]),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ProductCategoryComponent,
    ListProductsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }