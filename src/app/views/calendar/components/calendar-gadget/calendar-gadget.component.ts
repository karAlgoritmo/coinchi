import { Component, OnInit, Input, EventEmitter,Output,SimpleChanges} from '@angular/core';
import { Date } from 'src/app/interfaces/date';
import { Message } from 'src/app/interfaces/message';
import { Okrmodule } from 'src/app/interfaces/okrmodule';

@Component({
  selector: 'calendar-gadget',
  templateUrl: './calendar-gadget.component.html',
  styleUrls: ['./calendar-gadget.component.scss']
})
export class CalendarGadgetComponent implements OnInit {
  // *******
//  todo: variables
// *******
// dates array from calendar
@Input() calendar:Date[]=[]
// number today
@Input() today:number=0
// event emitter
@Output() eventEmitter=new EventEmitter<Message>()
// *******
//  todo: functions
// *******
public openModal=(dateSelected:Date,index:number)=>{
  this.eventEmitter.emit({message:'open',data:{...dateSelected,index:index}})
}
// *******
//  todo: life cycles
// *******
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['calendar']){
      this.calendar=changes['calendar'].currentValue || []
      debugger
    }
  }

}
