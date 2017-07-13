

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class YearService {
  private url =  "http://localhost:8000/api/years";

  constructor(private http: Http) { }

  getYears(): Observable<any> {
    return this.http.get(this.url)
      .map((response: Response) => {

        return response.json().years;
      }
      );

    } // end getYears()


}
