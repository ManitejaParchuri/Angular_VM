import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maniteja',
  templateUrl: './maniteja.component.html',
  styleUrls: ['./maniteja.component.css']
})
export class ManitejaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customer={
    name:'ManiTeja',
    age:20,
    truth: true,
    array: [10, 20, 30, 40],
    numAndString:  [1, 'ManiTeja'],
    allType: true
   }

}
