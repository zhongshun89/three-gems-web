import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
      state('in', style({
          'max-height': '500px', 'visibility': 'visible', 'z-index': 100, position: 'absolute'
      })),
      state('out', style({
          'max-height': '0px', 'visibility': 'hidden', 'z-index': 100, position: 'absolute'
      })),
      transition('in => out', [group([
          animate('250ms ease-in-out', style({
              'max-height': '0px'
          })),
          animate('250ms ease-in-out', style({
              'visibility': 'hidden'
          }))
      ]
      )]),
      transition('out => in', [group([
          animate('250ms ease-in-out', style({
              'visibility': 'visible'
          })),
          animate('250ms ease-in-out', style({
              'max-height': '500px'
          })),
      ]
      )])
  ]),
]