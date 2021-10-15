import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  constructor(elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor='lightgreen'
  }

}
