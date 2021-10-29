import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBurger } from '../../shared/interfaces/burger';

@Injectable()
export class HomeService {
  private url = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {}

  addBurger(burger: IBurger) {
    return this.http.post(`${this.url}/hamburgers`, burger);
  }
  getBurger(id: number) {
    return this.http.get<IBurger>(`${this.url}/hamburgers/${id}`);
  }
  updateBurger(id: number, burger: IBurger) {
    return this.http.put(`${this.url}/hamburgers/${id}`, burger);
  }
}
