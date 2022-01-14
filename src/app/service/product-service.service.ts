import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IProduct } from "../view/home/home.component";

@Injectable({
  providedIn: "root",
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<any> {
    return this.http.get(environment.API_URL + 'product');
  }


  postProudct(params : IProduct) : Observable<any> {
    return this.http.post(environment.API_URL + 'product',params);
  }

  getProductById(id:string) :Observable<any>{
    return this.http.get(environment.API_URL + 'product/'+ id);
  }

  deleteProductById(id:string) :Observable<any>{
    return this.http.delete(environment.API_URL + 'product/'+ id);
  }

  updateProduct(params : IProduct, id: string) : Observable<any> {
    return this.http.put(environment.API_URL + 'product/' + id,params);
  }
}
