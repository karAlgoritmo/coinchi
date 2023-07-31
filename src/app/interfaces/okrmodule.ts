export interface Okrmodule {
  id?:string | number,
  name: string,
  icon: icons,
  category:categories
  objetive:number,
  progress:number,
  img:string
}

export enum icons{
  videogame='sports_esports',
  Serie='tv',
  Anime='local_fire_department',
  Book='menu_book',
  Courses='school',
  Movies='movie',
  Event='music_note',
  cinema='theater_comedy'
}
export enum categories{
  videogame='Video Game',
  Serie='Serie',
  Anime='Anime',
  Book='Book',
  Courses='Course',
  Movies='Movies',
  Event='Event',
  Cinema='Cinema'
}

export interface OkrModuleOmit extends Omit<Okrmodule,'id'>{

}
