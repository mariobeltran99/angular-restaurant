import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  burgers: any = [];
  constructor(private api: HistoryService) {}

  ngOnInit() {
    this.api.getBurgers().subscribe((data) => {
      this.burgers = data;
    });
  }
}
