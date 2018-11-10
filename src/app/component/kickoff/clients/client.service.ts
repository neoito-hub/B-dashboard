import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {
  API_ADD_CLIENT,
  API_LIST_CLIENT
} from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ClientService {
  constructor(public http: HttpClient) {}

  addClient(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(API_ADD_CLIENT, data, httpOptions);
  }

  allClients() {
    return this.http.get(API_LIST_CLIENT);
  }
}
