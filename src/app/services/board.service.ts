import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class BoardService {

  private url = "http://localhost:8000/api/boards";

  constructor(private http: Http) { }

  getBoards(): Observable<any> {
    return this.http.get(this.url)
      .map((response: Response) => {

          return response.json().boards;

        }

      );
  } // end getBoards()


}
