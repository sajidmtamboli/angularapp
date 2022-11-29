import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {
  name : string='CodeMind Technology';
  serverID : number=37;
  serverStatus : string='offline';
  allowNewServer = false ;
  imgUrl = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4c%2FTypescript_logo_2020.svg%2F1200px-Typescript_logo_2020.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ATypescript_logo_2020.svg&tbnid=YHdrI9J7N8Lv7M&vet=12ahUKEwjMgPrsx8b7AhVmRqQEHYWjAB8QMygAegUIARC-AQ..i&docid=cXL5OHlxPuzO1M&w=1200&h=1200&q=file%20typescript%20logo%20image&ved=2ahUKEwjMgPrsx8b7AhVmRqQEHYWjAB8QMygAegUIARC-AQ'
  serverCreationStatus : string ='server not created';
  constructor(){
     setTimeout(()=>{
         this.allowNewServer = true
     }, 5000);
   }
  
  
  getServerStatus() {return this.serverStatus;}

   onCreatedServer(){
   this.serverCreationStatus='server is creted'
  }
 }