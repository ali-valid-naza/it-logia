import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderStaff } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class TransitDataService {
  private _observer = new BehaviorSubject<OrderStaff>({});
  public subscriber$ = this._observer.asObservable();
  data: OrderStaff;

  emitData(data: OrderStaff) {
    this._observer.next(data);
  }
}
