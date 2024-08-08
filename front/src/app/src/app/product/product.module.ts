import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import {ProductRoutingModule} from "./product-routing.module";
import {TableModule} from "primeng/table";
import {BaseModule} from "../../../base/base.module";




@NgModule({
  declarations: [
    ProductsAdminComponent,
    ProductsComponent
  ],
  exports: [
    ProductsAdminComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TableModule,
    BaseModule,
  ]
})
export class ProductModule { }
