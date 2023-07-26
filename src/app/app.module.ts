import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { CashFlowComponent } from './views/cash-flow/cash-flow.component';
// material
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { ScheduleGadgetComponent } from './views/calendar/components/schedule-gadget/schedule-gadget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    NavbarHeaderComponent,
    CashFlowComponent,
    ScheduleGadgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
