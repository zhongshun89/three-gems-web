import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { BookConfigure } from './book-exhibition.model'

@Component({
  selector: 'book-exhibition',
  templateUrl: './book-exhibition.component.html',
  styleUrls: ['./book-exhibition.component.scss']
})
export class BookExhibitionComponent implements OnInit {
  @Input() configure: BookConfigure;

  @HostBinding("style.--width") width: string;
  @HostBinding("style.--height") height: string;
  @HostBinding("style.--color") color: string;
  transformClass: string [] = ['view-default-right'];
  image: string;
  spine: string;

  constructor() {}

  ngOnInit(): void {
    this.width = this.configure.width;
    this.height = this.configure.height;
    // this.color = this.configure.color ?? '#F33139';
    this.color = this.configure.color ?? 'gray';
    this.image = this.configure.image ?? '';
    this.spine = this.configure.spine ?? '';
    this.transformClass[0] = this.configure.direction ?? 'view-default-right';
  }

  viewInside() {
    this.transformClass = [
      'view-inside'
    ]
  }

  viewBack() {
    this.transformClass = [
      'view-back'
    ]    
  }

  viewDefault() {
    this.transformClass = [
      'view-default-right'
    ]    
  }  
}
