import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
