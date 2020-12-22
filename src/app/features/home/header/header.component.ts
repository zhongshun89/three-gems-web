import { Component, OnInit, HostListener, HostBinding, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFixed: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private window: Window
  ) { }

  ngOnInit(): void {}

  @HostListener("window:scroll", [])
  
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.isFixed = offset > 10 
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }
}
