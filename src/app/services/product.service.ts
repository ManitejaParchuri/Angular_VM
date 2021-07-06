import { Injectable } from '@angular/core';


interface Product
{
  productId:number,
  productName:String,
  productPrice:number,
  productDes:String,
  productImg:String,
} 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[
    {productId:101, productName:'football',productPrice:22222,productDes:'the product is football ',productImg:'assets/download.jpg'},
    {productId:102, productName:'basktball',productPrice:33333,productDes:'the product is basketBall ',productImg:'assets/download2.jpg'},
    {productId:103, productName:'cricket ball',productPrice:4444,productDes:'the product is cricket ',productImg:'assets/download3.jpg'}
    
  ]
  constructor() { }

  getallproducts():any{
    return this.products;
  }
}
