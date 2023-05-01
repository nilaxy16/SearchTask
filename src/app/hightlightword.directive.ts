import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlightword]'
})
export class HightlightwordDirective {

  constructor(private el: ElementRef) { }

  @Input() searchtext= '';
   
  @HostListener('click') onClick() {
    let content = document.getElementsByClassName('card-text')[0].innerHTML;
    if(this.searchtext != '') {
      // this is for partial search
      /* const re = new RegExp(this.searchtext, 'igm');
      content= content.replace(re, '<span class="highlighted-text">$&</span>'); */

      // this is for full search
      const re = new RegExp("\\b("+this.searchtext+"\\b)", 'igm');
      content= content.replace(re, '<span class="highlighted-text">$1</span>');
    } 
    document.getElementsByClassName('card-text')[0].innerHTML = content;
  }

}
