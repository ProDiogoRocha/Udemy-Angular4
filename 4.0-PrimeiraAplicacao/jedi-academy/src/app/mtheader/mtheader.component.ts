import { Component, Input } from '@angular/core';

@Component({
  selector: 'jad-mtheader',
  template: '<h1>{{title}}</h1>'
})
export class MtheaderComponent {

  @Input() title: string;

}
