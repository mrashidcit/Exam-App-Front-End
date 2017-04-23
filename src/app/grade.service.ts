

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class GradeService {
    constructor(private http: Http){

    }

    getGrades(): Observable<any> {
        return this.http.get('http://localhost:8000/api/classes')
            .map(
                (response: Response) => {
                    return response.json().grades;
                }
            );
    }
}