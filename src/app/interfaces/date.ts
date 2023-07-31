import { Activities } from "./activities";

export interface Date {
  index?:number,
  date:string,
  active:boolean,
  event?:string,
  activities:Activities,
  score:number
}


