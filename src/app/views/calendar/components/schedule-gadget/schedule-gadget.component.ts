import { Component, OnInit, Input } from '@angular/core';
import { Okrmodule, categories, icons } from 'src/app/interfaces/okrmodule';

@Component({
  selector: 'schedule-gadget',
  templateUrl: './schedule-gadget.component.html',
  styleUrls: ['./schedule-gadget.component.scss']
})
export class ScheduleGadgetComponent implements OnInit {
// *******
//  todo: variables
// *******
// module information
@Input() module:Okrmodule={
  id: '',
  name: '',
  icon: icons.videogame,
  category: categories.videogame,
  objetive: 0,
  progress: 0,
  img: ''
}

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
