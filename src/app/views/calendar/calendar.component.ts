import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { Okrmodule, categories, icons } from 'src/app/interfaces/okrmodule';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  // *******
//  todo: variables
// *******
// okr calendar
public calendar:any=[]
// today
public today:number=0
//
public modules:Okrmodule[]=[
  {icon:icons.videogame,name:'God of war',progress: 28,objetive:100, category:categories.videogame,img:'https://wotpack.ru/wp-content/uploads/2022/01/God-of-War-chto-delat-posle-zavershenija-osnovnogo-sjuzheta.jpg'},
  {icon:icons.Serie,name:'The last of us',progress: 7,objetive:8, category:categories.Serie,img:'https://cdn.forbes.com.mx/2023/01/the-last-of-us-640x360.webp'},
  {icon:icons.Anime,name:'Attack of titans',progress: 18,objetive:30, category:categories.Anime,img:'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/03/Attack-on-Titan-Estos-son-los-titanes-mas-populares-de-la-serie-en-Japon.jpg'},
  {icon:icons.Book,name:'El batman que rie',progress: 170,objetive:200, category:categories.Book,img:'https://www.saladepeligro.com/wp-content/uploads/2020/12/Batman-que-r%C3%ADe-destacada.jpg'},
  {icon:icons.Courses,name:'Typescript',progress: 1,objetive:4, category:categories.Courses,img:'https://www.g-talent.net/cdn/shop/articles/que-es-typescript-1658755532025_47a3ff42-50f3-4968-a9ed-6cca8e24185a.jpg?v=1675279891'},
  {icon:icons.Movies,name:'El resplandor y el Cubo',progress: 1,objetive:2, category:categories.Movies,img:'https://i.blogs.es/a575f5/theshinning-f1/450_1000.jpg'},
  {icon:icons.Event,name:'Concierto here comes the kraken',progress: 1,objetive:1, category:categories.Event,img:'https://agendasanluis.com/wp-content/uploads/2016/06/here-comes-copia-e1467239043436.jpg'},
  {icon:icons.cinema,name:'Insidious 5 y Tortugas ninja',progress: 1,objetive:2, category:categories.Cinema,img:'https://images7.alphacoders.com/411/411068.jpg'},
]
// *******
//  todo: functions
// *******
public generateCalendar=()=>{
  this.today=moment().date()
  let daysInMonth=moment().daysInMonth()
  let year=moment().year()
  let month=moment().month()

  for (let index = 1; index <= daysInMonth; index++) {
    let score=Math.random()*10
    this.calendar.push({date:`${year}-${month+1}-${index}`,active: index<this.today?false:true,score:score<5?score+5:score})
  }
}
// *******
//  todo: life cycles
// *******



  constructor() { }

  ngOnInit(): void {
    this.generateCalendar()
  }

}
