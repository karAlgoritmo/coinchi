

export interface Activities {
  videogame:number
  gym:number,
  course:number,
  serie:number,
  anime:number,
  work:number,
  book:number
}

export type Score={
  name:ScoreName,
  value:ScoresNum
}

export enum ScoresNum{
  bad=5,
  regular=7.5,
  good=8.5,
  amazing=10
}

export enum ScoreName{
  bad='Bad',
  regular='Regular',
  good='Good',
  amazing='Amazing'
}


