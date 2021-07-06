import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})




export class ProductComponent    { 
  filteredString:string='';
  sortby:any='1';
  products:any;
    constructor(private productServices:ProductService)
    {
      this.products=productServices.getallproducts();
    }
  }
  

 


