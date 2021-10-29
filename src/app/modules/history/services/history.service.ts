import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBurger } from '../../shared/interfaces/burger';

@Injectable()
export class HistoryService {
  private url = 'http://127.0.0.1:3000';
  constructor(private http: HttpClient) {}

  getBurgers() {
    return this.http.get<IBurger>(
      `${this.url}/hamburgers?_sort=id&_order=desc`
    );
  }
  getBurger(id: number) {
    return this.http.get<IBurger>(`${this.url}/hamburgers/${id}`);
  }
  deleteBurger(id: number) {
    return this.http.delete(`${this.url}/hamburgers/${id}`);
  }
}
