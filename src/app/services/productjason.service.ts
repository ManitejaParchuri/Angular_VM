import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductjasonService {

  url:string = '../../assets/product.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getproductInfo():Observable<any>{
     return this.httpClient.get(this.url)
  }
}
