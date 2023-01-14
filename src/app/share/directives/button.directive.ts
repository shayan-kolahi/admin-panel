import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  constructor(private el:ElementRef) {
    this.el.nativeElement.classList.add("rounded-md");
    this.el.nativeElement.classList.add("text-white");
    this.el.nativeElement.classList.add("bg-cyan-500");
    this.el.nativeElement.classList.add("hover:bg-cyan-700");
    this.el.nativeElement.classList.add("disabled:bg-slate-300");
    this.el.nativeElement.classList.add("disabled:text-slate-700");
    this.el.nativeElement.classList.add("transition-all");
    this.el.nativeElement.classList.add("py-3");
    this.el.nativeElement.classList.add("px-8");
  }
}
