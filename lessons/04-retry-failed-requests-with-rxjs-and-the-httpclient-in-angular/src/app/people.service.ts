import { Injectable } from '@angular/core';
import { Observable, of, throwError, } from 'rxjs';
import { delay, retryWhen, flatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<Object> {
    return this.http
      // .get('/assets/data/people.json');
      .get('/assets/data/unavailable.json')
      .retryWhen(err => {
        let retries = 3;

        return err
          .delay(1000)
          .flatMap((err) => {
            if (retries-- > 0) {
              return Observable.of(err);
            } else {
              return Observable.throw(err);
            }
          });
      });
  }

}
