import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

import { routeTransAnimation } from './app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> void', [
        useAnimation(routeTransAnimation)
      ])
    ])
  ]
})

export class AppComponent {
  title = 'three-gems-web';
  
  routeAnimation(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
