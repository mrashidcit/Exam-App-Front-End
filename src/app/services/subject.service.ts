



import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
export class SubjectService {
    constructor(private http: Http){

    }


    getSubjects(): Observable<any> {
        return this.http.get('http://localhost:8000/api/subjects/1')
            .map(
                (response: Response) => {
                    return response.json().subjects;
                }
            );
    }
}