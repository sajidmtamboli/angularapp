import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-parent',
  templateUrl: './life-cycle-parent.component.html',
  styleUrls: ['./life-cycle-parent.component.css']
})
export class LifeCycleParentComponent implements OnInit {
data:string='green';
  constructor() { }

  ngOnInit() {
  }
  getData(value){
this.data=value.target.value
  }
  isshow:boolean= true;
  clear(){
this.isshow=false;
  }
}
