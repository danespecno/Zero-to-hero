import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group,
} from '@angular/animations';

export const opacityInOut = trigger('opacityInOut', [
  state(
    'in',
    style({
      opacity: 1,
    })
  ),
  state(
    'out',
    style({
      opacity: 0,
    })
  ),
  transition('in <=> out', [animate('1s ease-in-out')]),
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-in-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('1s ease-in-out', style({ opacity: 0 })),
  ]),
]);
export const SlideInRight = trigger('SlideInRight', [
  state(
    'in',
    style({
      opacity: 1,
      transform: 'translateX(0)',
    })
  ),
  state(
    'out',
    style({
      opacity: 0,
      transform: 'translateX(-100px)',
    })
  ),
  transition('in <=> out', [animate('1s ease-in-out')]),
  ,
]);
export const SlideInLeft = trigger('SlideInLeft', [
  state(
    'in',
    style({
      opacity: 1,
      transform: 'translateX(0)',
    })
  ),
  state(
    'out',
    style({
      opacity: 0,
      transform: 'translateX(100px)',
    })
  ),
  transition('in <=> out', [animate('1s ease-in-out')]),
  ,
]);
export const RouteSlideAnimation = trigger('RouteSlideAnimation', [
  transition('login => todo', [
    style({ position: 'relative', overflowX: 'hidden' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))]),
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('todo => login', [
    style({ position: 'relative', overflowX: 'hidden' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
