import { Component, OnInit } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { HistoryService } from '../../services/history.service';
import { IBurger } from 'src/app/modules/shared/interfaces/burger';
import { countsIngredients } from './../../../shared/constants/countsIngredients';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class DetailsComponent implements OnInit {
  id: number = 0;
  burger: IBurger = {
    name: '',
    ingredients: [],
    price: 0,
    currency: '',
  };
  list: Array<any> = [];
  location: Location;
  constructor(
    private routeActive: ActivatedRoute,
    private api: HistoryService,
    location: Location
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.routeActive.params.subscribe((params: Params) => {
      this.id = params.id;
      if (this.id !== undefined) {
        this.api.getBurger(this.id).subscribe((data) => {
          this.burger = {
            id: data.id,
            name: data.name,
            currency: data.currency,
            ingredients: data.ingredients,
            price: data.price,
          };
          this.list = countsIngredients(data.ingredients);
        });
      }
    });
  }
  returnPage() {
    this.location.back();
  }
}
