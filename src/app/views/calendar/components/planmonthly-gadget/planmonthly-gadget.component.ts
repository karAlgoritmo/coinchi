import { Component, Input, OnInit } from '@angular/core';
import { Okr } from 'src/app/interfaces/okr';
import { Okrmodule } from 'src/app/interfaces/okrmodule';

@Component({
  selector: 'planmonthly-gadget',
  templateUrl: './planmonthly-gadget.component.html',
  styleUrls: ['./planmonthly-gadget.component.scss']
})
export class PlanmonthlyGadgetComponent implements OnInit {
  // *******
  //  todo: variables
  // *******
 // schedule modules
 @Input() okr: Okr[] = []
//  schedule modules
@Input() modules:Okrmodule[]=[]
 // *******
  //  todo: functions
  // *******

  // *******
  //  todo: life cycles
  // *******
  constructor() { }

  ngOnInit(): void {
  }

}
