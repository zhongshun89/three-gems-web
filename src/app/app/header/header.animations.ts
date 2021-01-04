import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';

export const HeaderAnimation = [
  trigger('toggleMenu', [
    state(
      'show',
      style({
        'max-height': '500px',
        visibility: 'visible',
        position: 'absolute',
      })
    ),
    state(
      'hide',
      style({
        'max-height': '0px',
        visibility: 'hidden',
        position: 'absolute',
      })
    ),
    transition('show => hide', [animate('250ms linear')]),
    transition('hide => show', [animate('250ms linear')]),
  ]),
  trigger('scrollDownUp', [
    state(
      'down',
      style({
        transform: 'translateY(-64px)',
      })
    ),
    state(
      'up',
      style({
        transform: 'translateY(0px)',
      })
    ),
    transition('down => up', [animate('0.2s linear')]),
    transition('up => down', [animate('0.25s linear')])
  ]),
];
