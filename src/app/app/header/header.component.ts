import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  languages = ['en', 'zh-cn', 'tw'];
  
  navigation = [
    { link: 'about', label: 'about' },
    { link: 'services', label: 'services' },
    { link: 'customers', label: 'customers' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
