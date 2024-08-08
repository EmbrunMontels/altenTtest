import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products)
    })
  }

  onRowEditInit(product: any) {

  }

  onRowEditSave(product: any) {

  }

  onRowEditCancel(product: any, index: number) {

  }


}
