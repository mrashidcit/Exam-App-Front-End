



import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
export class SubjectService {
    constructor(private http: Http){

    }

    subject_link = "http://localhost:8000/api/subjects";

    getSubjects(): Observable<any> {
        return this.http.get(`http://localhost:8000/api/subjects`)
            .map(
                (response: Response) => {
                    return response.json().subjects;
                }
            );
    }

    getSubjectofOneGrade($class_id: number): Observable<any> {
        return this.http.get(this.subject_link + '/oneGrade/' + $class_id)
            .map(
                (response: Response) => {
                    return response.json().subjects;
                }
            )
    }
}