import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drawing-burger',
  templateUrl: './drawing-burger.component.html',
  styleUrls: ['./drawing-burger.component.scss'],
})
export class DrawingBurgerComponent implements OnInit {
  @Input('ingredients') ingredients!: Array<string>;
  constructor() {}

  ngOnInit(): void {}
}
