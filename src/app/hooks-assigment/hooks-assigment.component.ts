import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-hooks-assigment',
  templateUrl: './hooks-assigment.component.html',
  styleUrls: ['./hooks-assigment.component.css']
})
export class HooksAssigmentComponent implements OnInit {
  @Input() username: string;
  constructor() {
    console.log("HooksComponent constructor called");
   }

   ngOnChanges(changes: SimpleChange): void {

    console.log("HooksComponent ngOnChanges called");
    for (const propname in changes) {
      const propertis = changes[propname];

      const {previousValue, currentValue, firstChange} = propertis;

      console.log(`Prop name ${propname}`);
      console.log(`Prev  value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First change ${firstChange}`);
      console.log("---------------")
    }    
  }
  ngOnInit() {
    console.log("HooksComponent ngOnInit called")
  }

}
