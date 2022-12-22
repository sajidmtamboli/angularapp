import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-assigment',
  templateUrl: './pipe-assigment.component.html',
  styleUrls: ['./pipe-assigment.component.css']
})
export class PipeAssigmentComponent implements OnInit {
  todayDate = new Date()
  prices : number = 3000;
  obj = { Id : '1' , name: 'Sachin'}
  constructor() { }

  ngOnInit() {
  }

}
