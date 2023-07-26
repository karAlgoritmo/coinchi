import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CalendarComponent } from './views/calendar/calendar.component';

const routes: Routes = [
  {component:HomeComponent,path:''},
  {component: CalendarComponent,path:'calendar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
