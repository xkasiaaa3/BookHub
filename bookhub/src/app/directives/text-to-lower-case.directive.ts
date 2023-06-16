import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[textToLowerCase]'
})
export class TextToLowerCaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }


}
