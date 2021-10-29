import { Component } from '@angular/core';

@Component({
  selector: 'card',
  template: ` <div class="card"><ng-content></ng-content></div> `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {}
