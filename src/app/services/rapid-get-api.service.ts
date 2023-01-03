import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidGetAPIService {

  constructor(private _httpclientmodule : HttpClient ) { 

  }
  url = 'https://youtube-music1.p.rapidapi.com/v2/search?query=eminem'; 

  getRapidapiData(){
    let header = new HttpHeaders({
      'X-RapidAPI-Key': '6b4e83b1a4msh4d9506327a130b4p1ede68jsna5e81230feda',
      'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    })
return this._httpclientmodule.get(this.url, {headers: header})

  }
}


