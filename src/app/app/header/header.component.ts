import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderAnimation } from './header.animations';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [HeaderAnimation],
})
export class HeaderComponent implements OnInit {
  languages = ['en', 'zh-cn', 'tw'];

  navigation = [
    { link: 'about', label: 'about' },
    { link: 'services', label: 'services' },
    { link: 'customers', label: 'customers' },
  ];

  menuState = 'hide';
  scrollState = 'up';
  oldScrollOffset = 0;

  constructor(
    private window: Window,
    private deviceService: DeviceDetectorService
  ) {}

  ngOnInit(): void {}

  get isDesktop() {
    return this.deviceService.isDesktop();
  }

  toggleSlideMenu() {
    this.menuState = this.menuState === 'hide' ? 'show' : 'hide';
  }

  // TODO apply listener conditionally
  @HostListener('window:scroll')
  onScroll() {
    if (this.isDesktop) {
      console.log('is desktop');
      const newScrollOffset = this.window.pageYOffset || 0;
      const scrollSpan = newScrollOffset - this.oldScrollOffset;
      if (scrollSpan > 10) {
        this.scrollState = 'down';
      } else if (scrollSpan < -10) {
        this.scrollState = 'up';
      }
      this.oldScrollOffset = newScrollOffset;
    }
  }
}
