import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { Score, ScoreName, ScoresNum } from 'src/app/interfaces/activities';
import { Date } from 'src/app/interfaces/date';
import { Okrmodule, categories, icons } from 'src/app/interfaces/okrmodule';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { reduce } from 'rxjs';
import { Okr } from 'src/app/interfaces/okr';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  // *******
  //  todo: variables
  // *******
  // date Form
  // form of projection
  public dateForm: any = new FormGroup({
    videogame: new FormControl('', []),
    course: new FormControl('', []),
    anime: new FormControl('', []),
    serie: new FormControl('', []),
    work: new FormControl('', []),
    gym: new FormControl('', []),
    book: new FormControl('', []),
  });
  // define the date selected
  public dateSelected: Date = {
    date: '',
    active: false,
    activities: {
      videogame: 5,
      gym: 0,
      course: 0,
      serie: 0,
      anime: 0,
      work: 0,
      book: 0
    },
    score: 0
  }
  // okr calendar
  public calendar: Date[] = []
  // today
  public today: number = 0
  // schedule modules
  public modules: Okrmodule[] = [
    { icon: icons.videogame, name: 'God of war', progress: 28, objetive: 100, category: categories.videogame, img: 'https://wotpack.ru/wp-content/uploads/2022/01/God-of-War-chto-delat-posle-zavershenija-osnovnogo-sjuzheta.jpg' },
    { icon: icons.Serie, name: 'The last of us', progress: 7, objetive: 8, category: categories.Serie, img: 'https://cdn.forbes.com.mx/2023/01/the-last-of-us-640x360.webp' },
    { icon: icons.Anime, name: 'Attack of titans', progress: 18, objetive: 30, category: categories.Anime, img: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/03/Attack-on-Titan-Estos-son-los-titanes-mas-populares-de-la-serie-en-Japon.jpg' },
    { icon: icons.Book, name: 'El batman que rie', progress: 170, objetive: 200, category: categories.Book, img: 'https://www.saladepeligro.com/wp-content/uploads/2020/12/Batman-que-r%C3%ADe-destacada.jpg' },
    { icon: icons.Courses, name: 'Typescript', progress: 1, objetive: 4, category: categories.Courses, img: 'https://www.g-talent.net/cdn/shop/articles/que-es-typescript-1658755532025_47a3ff42-50f3-4968-a9ed-6cca8e24185a.jpg?v=1675279891' },
    { icon: icons.Movies, name: 'El resplandor y el Cubo', progress: 1, objetive: 2, category: categories.Movies, img: 'https://i.blogs.es/a575f5/theshinning-f1/450_1000.jpg' },
    { icon: icons.Event, name: 'Concierto here comes the kraken', progress: 1, objetive: 1, category: categories.Event, img: 'https://agendasanluis.com/wp-content/uploads/2016/06/here-comes-copia-e1467239043436.jpg' },
    { icon: icons.cinema, name: 'Insidious 5 y Tortugas ninja', progress: 1, objetive: 2, category: categories.Cinema, img: 'https://images7.alphacoders.com/411/411068.jpg' },
  ]
  // scores categories
  public scores: Score[] = [{ name: ScoreName.bad, value: ScoresNum.bad }, { name: ScoreName.regular, value: ScoresNum.regular }, { name: ScoreName.good, value: ScoresNum.good }, { name: ScoreName.amazing, value: ScoresNum.amazing }]
  // okr
  public okr:Okr[] = [
    {
      title: 'Apocalipsys',
      img_bg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8T_JyE-lR0wHedUXSJ5T5wybgxrIxT2EiI7i5amffZY6Arp9S2OnfTZ7PyRwOhoPcyZE&usqp=CAU',
      img_character_1:'https://zelda.nintendo.com/links-awakening/assets/img/home/hero-char.png',
      img_character_2:'https://i.pinimg.com/originals/e7/3a/cb/e73acb47471808b90737e0a03c80c1f8.png',
      img_character_3:'https://media.fortniteapi.io/images/259bbb826124247449be37942a36e80c/transparent.png',
      videogame:'God of war: Ragnarok 2',
      book:'The Batman laughs',
      events:['Chelsea grin concert'],
      cinema: ['Ninja Turtles','Insidious 5'],
      movies: ['El resplandor', 'Terrifier'],
      courses: ['typescript','Typescript avanzado'],
      animes:['primal'],
      serie:['the last of us']
    },
    {
      title: 'Futuro y pasado',
      img_bg:'https://c4.wallpaperflare.com/wallpaper/165/612/862/aloy-horizon-forbidden-west-screen-shot-playstation-5-hd-wallpaper-preview.jpg',
      img_character_1:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce33d7dc-eeb1-4900-be73-3c00611e37af/ddbpzx8-3a6e8ca9-a65a-4f0b-a117-432673d91b09.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NlMzNkN2RjLWVlYjEtNDkwMC1iZTczLTNjMDA2MTFlMzdhZlwvZGRicHp4OC0zYTZlOGNhOS1hNjVhLTRmMGItYTExNy00MzI2NzNkOTFiMDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.31iyPZ3_wB0zskKI0boGbS5_vD_m_9jKXvFwjCzYBMU',
      img_character_2:'https://i.pinimg.com/originals/e7/3a/cb/e73acb47471808b90737e0a03c80c1f8.png',
      img_character_3:'https://qph.cf2.quoracdn.net/main-qimg-bb5b264724097c650f181077bc4d17d7',
      videogame:'God of war: Ragnarok',
      book:'The Batman laughs',
      events:['Chelsea grin concert'],
      cinema: ['Ninja Turtles','Insidious 5'],
      movies: ['El resplandor', 'Terrifier'],
      courses: ['typescript','Typescript avanzado'],
      animes:['primal'],
      serie:['the last of us']
    },
    {
      title: 'Macabro',
      img_bg:'https://cloudfront-us-east-1.images.arcpublishing.com/semana/Y6TKCOK6E5GU3FJFDR5UBEZMCA.jpg',
      img_character_1:'https://preview.redd.it/i-personally-think-sony-and-hoyoverse-shouldve-gone-with-v0-hn5d7u5f93w91.png?width=640&crop=smart&auto=webp&s=c4e514599cd2d14b4f0b54b07f09a7657a7a98d1',
      img_character_2:'https://i.pinimg.com/originals/e7/3a/cb/e73acb47471808b90737e0a03c80c1f8.png',
      img_character_3:'https://qph.cf2.quoracdn.net/main-qimg-bb5b264724097c650f181077bc4d17d7',
      videogame:'Zelda',
      book:'Harry Potter y el misterio del principe',
      events:['Boda de saul','Navidad'],
      cinema: ['Saw X'],
      movies: ['Terrifier'],
      courses: ['nest js','Backend'],
      animes:['Death Note'],
      serie:['Supernatural']
    }
  ]
  // *******
  //  todo: functions
  // *******
  public generateCalendar = () => {
    this.today = moment().date()
    let daysInMonth = moment().daysInMonth()
    let year = moment().year()
    let month = moment().month()

    for (let index = 1; index <= daysInMonth; index++) {
      let score = Math.random() * 10
      this.calendar.push({
        date: `${year}-${month + 1}-${index}`, active: index <= this.today ? true : false, score: score < 5 ? score + 5 : score,
        activities: {
          videogame: 7.5,
          gym: 5,
          course: 8.5,
          serie: 7.5,
          anime: 7.5,
          work: 10,
          book: 5
        }
      })
    }
  }
  // ?listener all childrens
  public listener = (event: any) => {
    if (event.message == 'open') {
      this.dateSelected = event.data;
      this.dateForm.setValue({
        ...this.dateSelected.activities
      })
      setTimeout(() => {
        (document.getElementById('dateDetailButton') as HTMLButtonElement).click()
      }, 0);

    }
  }
  // ? save
  public save = (index: number) => {
    this.calendar[index].activities = {...this.dateForm.value}
    let keys=Object.keys(this.calendar[index].activities)
    this.calendar[index].score=this.getAverageActivities(this.calendar[index],keys);
    (document.getElementById('close-date-detail') as HTMLButtonElement).click()
    // provitional
    let x=this.calendar.slice()
    this.calendar=[]
    this.calendar=x
    // this.calendar[index].score=keys.reduce((total:number,key:any)=> total+this.calendar[index].activities[key],0)
  }
  // ? get avarage from activities
  public getAverageActivities=(data:any,keys:string[]):number=>{
    let average=keys.reduce((total:number,key:string)=>total + data.activities[key],0)
    return average / keys.length

  }
  // *******
  //  todo: life cycles
  // *******



  constructor() { }

  ngOnInit(): void {
    this.generateCalendar()
  }

}
