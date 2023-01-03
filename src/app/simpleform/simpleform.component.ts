import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formclass } from '../models/movies';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
defaultValue:string= 'Angular';
  constructor(private _postservice : PostserviceService) { }
  formclass: Formclass;
  ngOnInit() {
    
  }
  OnSubmit(form:NgForm) {
   this.formclass = new Formclass()
   this.formclass.course = form.value.course
   this.formclass.username = form.value.username
   this.formclass.email = form.value.email

   this._postservice.postSimpleForm(this.formclass).subscribe(presentdata =>{
    console.warn(presentdata);
   })
   
 console.log(form);
// console.log(form.value.course);
// console.log(form.value.userDetails.username);
// console.log(form.value.userDetails.email);
  }
arrayData =[];
  getdata(){
    this._postservice.getSimpleForm().subscribe(result=>{
      // console.warn('getsimpleform',result.username);
      this.arrayData.push(result)
      console.log('sajid',this.arrayData);
      
      
    })
  }
}
