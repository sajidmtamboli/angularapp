import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-banding-assigment',
  templateUrl: './data-banding-assigment.component.html',
  styleUrls: ['./data-banding-assigment.component.css']
})
export class DataBandingAssigmentComponent  {
  nav : string = ' ';
reset(){
  return this.nav="";
}
  constructor() { }

  ngOnInit() {
  }

}
