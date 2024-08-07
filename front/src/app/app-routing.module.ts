import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsAdminComponent} from "./src/app/product/products-admin/products-admin.component";
import {ProductsComponent} from "./src/app/product/products/products.component";

const routes: Routes = [
  { path: 'admin/products', component: ProductsAdminComponent },
  { path: 'products', component: ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
