import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-exhibition',
  templateUrl: './book-exhibition.component.html',
  styleUrls: ['./book-exhibition.component.scss']
})
export class BookExhibitionComponent implements OnInit {
  transformClass: string [] = []

  constructor() {}

  ngOnInit(): void {}

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
      'view-default'
    ]    
  }  
}
