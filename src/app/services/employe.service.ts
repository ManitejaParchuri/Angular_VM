import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  
    url:string = '../../assets/employee.json'; //local
    //url:string = ''; //network RESTful
    constructor(private httpClient:HttpClient) { }
    getEmployeesInfo():Observable<any>{
       return this.httpClient.get(this.url)
    }
  
}
