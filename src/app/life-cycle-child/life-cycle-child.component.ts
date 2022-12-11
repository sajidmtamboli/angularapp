import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
@Input() parentData: string;
@ContentChild('refer',{static:false}) contentChildData:ElementRef;
@ViewChild('childData',{static:false}) contentParentData:ElementRef;
  constructor() {
    console.log("constructor called");
   }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
    
    
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
    this.contentParentData.nativeElement.setAttribute('style',`color:${this.parentData}`)
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    // this.contentParentData.nativeElement.setAttribute('style','color:yellow')
    
  }
  ngAfterContentChecked(): void {
   console.log("ngAfterContentChecked called");
   this.contentChildData.nativeElement.setAttribute('style',`color:${this.parentData}`)
   
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    // this.contentChildData.nativeElement.setAttribute('style','color:red')
    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }
  ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChanges called");
  
  
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }

}
