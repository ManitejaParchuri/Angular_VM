import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../services/data1.service';


@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  customerss:any=[]
  customerss1:any=[
    {"empId":1,"empName":"Maniteja","salary":20000},
    {"empId":2,"empName":"Shashak","salary":19000},
    {"empId":3,"empName":"sasi","salary":18000},
    {"empId":4,"empName":"sasi","salary":18000}
  ]





  constructor(private dataService:Data1Service) {
    dataService.currentMsg.subscribe(successMsg => this.customerss = successMsg)
  }
  ngOnInit(): void {  }
  modifiedData(){


     


     for(var i=0;i<this.customerss1.length;i++){
    this.dataService.changeData(this.customerss1[i])
     }
  }
}
