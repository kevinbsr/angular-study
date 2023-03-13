import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.defaultColor
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.highlightColor
  }
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'yellow';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor
  }
}
