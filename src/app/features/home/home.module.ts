import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { TripitakaComponent } from './tripitaka/tripitaka.component';
import { DisciplesComponent } from './disciples/disciples.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    TripitakaComponent,
    DisciplesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class HomeModule { }
