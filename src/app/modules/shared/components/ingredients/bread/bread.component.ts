import { Component, Input } from '@angular/core';

@Component({
  selector: 'bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.scss'],
})
export class BreadComponent {
  @Input('reverse') public reverse: boolean = false;

  get classes(): Object {
    return {
      reverse: this.reverse,
    };
  }
}
