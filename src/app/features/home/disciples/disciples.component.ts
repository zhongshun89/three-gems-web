import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'; // https://github.com/vitalii-andriiovskyi/ngx-owl-carousel-o


@Component({
  selector: 'home-disciples',
  templateUrl: './disciples.component.html',
  styleUrls: ['./disciples.component.scss']
})
export class DisciplesComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['1', '2'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
		autoplaySpeed: 2000,
    autoplayMouseleaveTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  disciples = [{
    id: "a",
    src:'https://via.placeholder.com/600/92c952',
    alt:'Side 1',
    title:'Side 1'
  },
  {
    id: "b",
    src:'https://via.placeholder.com/600/771796',
    alt:'Side 2',
    title:'Side 2'
  },
  {
    id: "c",
    src:'https://via.placeholder.com/600/24f355',
    alt:'Side 3',
    title:'Side 3'
  },
  {
    id: "d",
    src:'https://via.placeholder.com/600/d32776',
    alt:'Side 4',
    title:'Side 4'
  },
  {
    id: "b1",
    src:'https://via.placeholder.com/600/771796',
    alt:'Side 2',
    title:'Side 2'
  },
  {
    id: "c2",
    src:'https://via.placeholder.com/600/24f355',
    alt:'Side 3',
    title:'Side 3'
  },
  {
    id: "d33",
    src:'https://via.placeholder.com/600/d32776',
    alt:'Side 4',
    title:'Side 4'
  },
  {
    id: "e44",
    src:'https://via.placeholder.com/600/f66b97',
    alt:'Side 5',
    title:'Side 5'
  }]

  constructor() { }

  ngOnInit() {}
}
