import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseOverToReveal]'
})
export class MouseOverToRevealDirective {
  @HostListener('mouseover', ['$event.target'])
  reveal(target) {
    target.style['white-space'] = 'normal';
  }

}
