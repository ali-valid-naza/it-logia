import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class SendToServerService {
  private serverUrl = '';
  private httpOptions: any;

  constructor(private http: HttpClient,) {
  }

  addOrder(order: Order): Observable<HttpEvent<Order>> {
    return this.http.post<Order>(this.serverUrl, order, this.httpOptions);
  }
}
