import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name:String='Demo2Component';
text:String='this is my second component';



}
