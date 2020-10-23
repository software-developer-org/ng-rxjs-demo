import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Store {
  constructor(public name: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  stores: Store[] = [];

  constructor() {
    new Array(5).fill('').forEach((_, index) => this.stores.push(new Store('Store ' + index)));
  }

  getStores(): Observable<Store[]> {
    return of(this.stores);
  }
}
