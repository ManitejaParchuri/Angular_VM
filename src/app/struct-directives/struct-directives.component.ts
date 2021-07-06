import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent  {
  employees:any = []
  errMsg:any;
  constructor(empService:EmployeService){
    empService.getEmployeesInfo().subscribe(
      result => {this.employees = result  
         console.log(result)},
      

      error => this.errMsg = error

    )
  }
}



