import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
  selector: '[appDropdwoun]'
})
export class DropdwounDirective {

  constructor() { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') click() {
    this.isOpen= !this.isOpen;
  }



}

