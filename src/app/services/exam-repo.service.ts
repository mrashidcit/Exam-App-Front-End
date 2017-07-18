import { Observable } from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ByIds } from "app/interfaces/byids.interface";
import { ExamRepo } from "app/interfaces/exam-repo.interface";


@Injectable()
export class ExamRepoService {
  private url = "http://localhost:8000/api/oldexam/findbyids";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getExamRepo(byIds: ByIds): Promise<any> {
    return this.http
          .post(this.url, JSON.stringify(byIds),
                {headers: this.headers})
          .toPromise()
          .then(res => res.json().exams as ExamRepo)
          .catch(this.handleError);
  }

   private handleError(error: any): Promise<any> {
        console.error('A error occured', error);
        return Promise.reject(error.message || error);
    }

}
