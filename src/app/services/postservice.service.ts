import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formclass } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  url= 'https://angular-crud-15976-default-rtdb.firebaseio.com/'

  constructor(private _postdata : HttpClient) { 
  
  }
postSimpleForm( formclass: Formclass){
  return this._postdata.post(this.url  + 'form.json', formclass )
}

getSimpleForm(){
  return this._postdata.get(this.url  + 'form.json' )
}
}
