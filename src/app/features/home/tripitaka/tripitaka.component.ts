import { Component, OnInit } from '@angular/core';
import { BookConfigure } from '@shared/book-exhibition/book-exhibition.model';

@Component({
  selector: 'home-tripitaka',
  templateUrl: './tripitaka.component.html',
  styleUrls: ['./tripitaka.component.scss']
})
export class TripitakaComponent implements OnInit {

  bookConfigure: BookConfigure = {
    height: '400px',
    width: '300px',
    // color: 'gray',
    image: '',
    direction: 'view-default-left'
  }

  constructor() {}

  ngOnInit(): void {}

}
