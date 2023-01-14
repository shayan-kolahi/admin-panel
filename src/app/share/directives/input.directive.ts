import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {
  constructor(private el:ElementRef) {
    this.el.nativeElement.classList.add("border");
    this.el.nativeElement.classList.add("rounded-md");
    this.el.nativeElement.classList.add("p-2");
    this.el.nativeElement.classList.add("py-3");
    this.el.nativeElement.classList.add("text-slate-400");
    this.el.nativeElement.classList.add("focus:border");
    this.el.nativeElement.classList.add("focus:outline-0");

  }
}
