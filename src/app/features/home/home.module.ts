import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { TripitakaComponent } from './tripitaka/tripitaka.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    TripitakaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
