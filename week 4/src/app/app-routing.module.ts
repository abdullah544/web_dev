import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'categories', component: ProductCategoryComponent},
  { path: 'categories/:categoryId/products', component: ListProductsComponent},
  { path: 'products/:productId', component: ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductListComponent, ProductCategoryComponent, ListProductsComponent, ProductInfoComponent]
