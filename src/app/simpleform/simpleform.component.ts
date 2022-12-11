import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
defaultValue:string= 'Angular';
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm) {
console.log(form);
console.log(form.value.course);
console.log(form.value.userDetails.username);
console.log(form.value.userDetails.email);
  }
}
