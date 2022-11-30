import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
Mobile:any=[
  {srNo:'1', model:'Vivo',price:250000},
  {srNo:'2', model:'Redmi',price:550000},
  {srNo:'3', model:'Iphone',price:900000}  
] 
  ngOnInit() {
  }
  array:any[]=[]
  getEvent(arg){
this.array=arg;
console.table(arg)
  }
}
