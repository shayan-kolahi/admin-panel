import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective {
  constructor(private el:ElementRef) {
    this.el.nativeElement.classList.add("border");
    this.el.nativeElement.classList.add("p-4");
    this.el.nativeElement.classList.add("bg-white");
    this.el.nativeElement.classList.add("rounded-lg");
    this.el.nativeElement.classList.add("shadow-md");
  }
}
