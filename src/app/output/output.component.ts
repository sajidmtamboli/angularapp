import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
@Output() mobileDetails:EventEmitter<any>= new EventEmitter<any>()
  constructor() { }
  Mobile:any=[
    {srNo:'1', model:'Vivo',price:250000},
    {srNo:'2', model:'Redmi',price:550000},
    {srNo:'3', model:'Iphone',price:900000}  
  ] 

  ngOnInit() {
  }
  clickEvent(value){
this.mobileDetails.emit(this.Mobile)

  }
}
