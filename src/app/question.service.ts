import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response, Headers} from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import {Question} from "./interfaces/question.interface";


@Injectable()
export class QuestionService {

    private questionsUrl = 'http://localhost:8000/api/questions'; // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){

    }

    create(question: Question): Promise<Question> {
        return this.http
            .post(this.questionsUrl, JSON.stringify(question),
                {headers: this.headers})
            .toPromise()
            .then(res => res.json().question as Question)
            .catch(this.handleError);

    }

    // get all questions
    getQuestions(): Observable<any> {

        return this.http.get('http://localhost:8000/api/questions')
            .map(
                (response: Response) => {
                    return response.json().questions;
                }
            );

    }


    getQuestion(id: Number): Promise<Question> {

        const url = `${this.questionsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().question as Question)
            .catch(this.handleError);

    }


    updateQuestion(question: Question, id: number): Promise<Question> {
        const url = `${this.questionsUrl}/${id}`;


        return this.http
            .put(url, JSON.stringify(question),
                    {headers: this.headers})
            .toPromise()
            .then(res => res.json().question as Question)
            .catch(this.handleError);



    } // end updateQuestion()


    // Getting questions for Quiz
    getQuestionList(id: Number): Observable<any>{

        const url = `${this.questionsUrl}/question-list/${id}`;

        return this.http.get(url)
            .map(
                (response: Response) => {
                    return response.json().questions;
                }
            );

    }


    private handleError(error: any): Promise<any> {
        console.error('A error occured', error);
        return Promise.reject(error.message || error);
    }
}