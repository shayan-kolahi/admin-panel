import {Directive, ElementRef} from "@angular/core";

@Directive(
  {
    selector: '[app-shayan]',
  }
)
export class shayanDirective
{

  /**
   * The directive constructor
   * @param {ElementRef} element
   */
  constructor(protected _elementRef: ElementRef)
  {

  }

  /**
   * Triggers when directive has initialized
   */
  ngOnInit()
  {

  }

  /**
   * Triggers when view has initialized
   */
  ngAfterViewInit()
  {

  }

  /**
   * Triggers when directive has destroyed
   */
  ngOnDestroy()
  {

  }
}
