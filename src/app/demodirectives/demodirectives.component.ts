import { Component, OnInit } from '@angular/core';
import { movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {
isShow : boolean= true;
title : string = "Top 3 Movies";
movies : movie[] = [
  {title : '3 Iditos', director:'Rajkumar', cast:'Amir', releaseDate :'2007'},
  {title : 'kantara', director:'Rishab', cast:'Rishab', releaseDate :'2022'},
  {title : 'KGF', director:'Rocky', cast:'Yash', releaseDate :'2019'}
]  
constructor() { }

  ngOnInit() {
  }

}
