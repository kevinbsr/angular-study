import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'white')
    this.backgroundColor = 'white'
  }


  // @HostBinding('style.backgroundColor') backgroundColor = '';

  @HostBinding('style.backgroundColor') get setColor(){
    // código extra
    return this.backgroundColor;
  }
  private backgroundColor = '';

  constructor(/* private _ElementRef: ElementRef, private _renderer: Renderer2 */) { }

}
