import { Component, Input, OnInit } from '@angular/core';
import { Okr } from 'src/app/interfaces/okr';
import { Okrmodule } from 'src/app/interfaces/okrmodule';

@Component({
  selector: 'planmonthlymodules-gadget',
  templateUrl: './planmonthlymodules-gadget.component.html',
  styleUrls: ['./planmonthlymodules-gadget.component.scss']
})
export class PlanmonthlymodulesGadgetComponent implements OnInit {
  // *******
  //  todo: variables
  // *******
 // schedule modules
 @Input() okr: Okr = {
   title: '',
   img_bg: '',
   img_character_1: '',
   img_character_2: '',
   img_character_3: '',
   videogame: '',
   book: '',
   events: [],
   cinema: [],
   movies: [],
   courses: [],
   animes: [],
   serie: []
 }
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
