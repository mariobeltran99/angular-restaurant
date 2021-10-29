import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-prices',
  templateUrl: './list-prices.component.html',
  styleUrls: ['./list-prices.component.scss'],
})
export class ListPricesComponent {
  @Input('coin') coin!: string;
  @Input('listBills') list!: Array<any>;
  @Input('price') priceAmount!: number;
}
