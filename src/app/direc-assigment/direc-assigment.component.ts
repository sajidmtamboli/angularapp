import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direc-assigment',
  templateUrl: './direc-assigment.component.html',
  styleUrls: ['./direc-assigment.component.css']
})
export class DirecAssigmentComponent implements OnInit {
  showSecret = false;
  log = [];
    constructor() { }
  
    ngOnInit() {
    }
    onToggleDetails() {
      this.showSecret = !this.showSecret;
      this.log.push(this.log.length + 1) ;
    }
  }
