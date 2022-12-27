import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private app : Router) { }

  ngOnInit() {
   
  }
  onclick(email,psd){
    if(email=='abc@ibibo.com' &&  psd =='1234'){
      alert('login succefully')
      this.app.navigate(['aboutUs'])
    } else{
      alert('not valid email')
    }
     
  }

}
