import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  price : number = 800000;
todaysDate= new Date()
  // obser: any;
   constructor() { 
    // this.obser = this._utilityService.userName;
  }

  ngOnInit() {
  }

}
