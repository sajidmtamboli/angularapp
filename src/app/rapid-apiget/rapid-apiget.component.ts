import { Component, OnInit } from '@angular/core';
import { RapidGetAPIService } from '../services/rapid-get-api.service';

@Component({
  selector: 'app-rapid-apiget',
  templateUrl: './rapid-apiget.component.html',
  styleUrls: ['./rapid-apiget.component.css']
})
export class RapidAPIGetComponent implements OnInit {

  constructor(private _rapidGetAPIService : RapidGetAPIService) { }
  sports = [];

  ngOnInit() {
    this._rapidGetAPIService.getRapidapiData().subscribe(reuslt=>{
    this.sports.push(reuslt)
    console.log(reuslt);
    
    })
  }

}
