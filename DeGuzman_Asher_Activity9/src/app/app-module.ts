import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LandingPage } from './landing-page/landing-page';
import { SidebarComponent } from './sidebar/sidebar';
import { Gym1 } from './gym1/gym1';
import { Gym2 } from './gym2/gym2';
import { Gym3 } from './gym3/gym3';
import { Gym4 } from './gym4/gym4';
import { Gym5 } from './gym5/gym5';
import { Gym6 } from './gym6/gym6';
import { Gym7 } from './gym7/gym7';
import { Gym8 } from './gym8/gym8';
import { TrainerForm } from './trainer-form/trainer-form';

@NgModule({
  declarations: [
    App,
    LandingPage,
    SidebarComponent,
    Gym1,
    Gym2,
    Gym3,
    Gym4,
    Gym5,
    Gym6,
    Gym7,
    Gym8,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrainerForm
  ],
  providers: [
  ],
  bootstrap: [App]
})
export class AppModule { }

