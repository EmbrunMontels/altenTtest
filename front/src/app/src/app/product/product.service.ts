import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = "front/src/assets/products.json"


  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<any>(this.productsUrl).pipe(
      map(response=> response.data)
    );
  }
}
