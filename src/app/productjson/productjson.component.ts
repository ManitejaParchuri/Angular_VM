import { Component, OnInit } from '@angular/core';

import { ProductjasonService } from '../services/productjason.service';

@Component({
  selector: 'app-productjson',
  templateUrl: './productjson.component.html',
  styleUrls: ['./productjson.component.css']
})
export class ProductjsonComponent  {

  filteredString:string='';
  sortby:any='1';
  products:any = []
  errMsg:any;
  constructor( proService:ProductjasonService){
    proService.getproductInfo().subscribe(
      result => {this.products = result  
         console.log(result)},
      

      error => this.errMsg = error

    )
  }

}
