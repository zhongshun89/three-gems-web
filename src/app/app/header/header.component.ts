import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './header.animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [SlideInOutAnimation],
})
export class HeaderComponent implements OnInit {
  languages = ['en', 'zh-cn', 'tw'];

  navigation = [
    { link: 'about', label: 'about' },
    { link: 'services', label: 'services' },
    { link: 'customers', label: 'customers' },
  ];

  menuState = 'out';
  pageState = 'up';

  constructor() {}

  ngOnInit(): void {}

  toggleSlideMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  scrollPage() {
    this.pageState = this.pageState === 'up' ? 'down' : 'up';
  }
}
