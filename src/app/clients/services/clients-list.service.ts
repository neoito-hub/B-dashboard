import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientsListService {
  constructor(private http: HttpClient) { }
  clientList = [
    { cname: 'rakesh', pname: 'propertok', email: 'e@d.c', skypeid: 'dd@liv' },
    { cname: 'sura', pname: 'milla', email: 'vv@mk.c', skypeid: 'aaa@liv' }
  ];
  clientDocuments = [
    {
      cname: 'rakesh', documents: [
        { docId: '1', docName: 'BRD', docLink: '' }, { docId: '2', docName: 'FRD', docLink: '' }
      ]
    },
    {
      cname: 'sura', documents: [
        { docId: '1', docName: 'BRD', docLink: '' }, { docId: '2', docName: 'FRD', docLink: '' }
      ]
    }
  ];
  getClientDetails(): Observable<any> {
    return Observable.create(observer => {
      observer.next(this.clientList);
      observer.complete();
    });
    // return this.http.get(GET_NETWORKS_URL).pipe(
    //   map(res => {
    //     return res;
    //   }),
    //   catchError(res => {
    //     return new ErrorObservable(res.error.errors[0]);
    //   })
    // );
  }
  getClientDocuments(name): Observable<any> {
    let documents = this.clientDocuments.filter(element => { element.cname == name });
    return Observable.create(observer => {
      observer.next(documents);
      observer.complete();
    })
  }
}
