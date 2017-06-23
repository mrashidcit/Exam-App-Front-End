
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Headers, Http, Response} from "@angular/http";
import { User } from '../interfaces/user.interface';


@Injectable()
export class AuthService {
    isLoggedIn = false;
    token: string;


    private authUrl = 'http://localhost:8000/api/authenticate'; // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    // store the URL so we can redirect after logging in
    redirectUrl: string;


    login(user: User): Observable<boolean> {



        return this.http.post(this.authUrl, JSON.stringify(user),
                    {headers: this.headers})
            .map((res: Response) => {
                let body = res.json();

                if(body.allowAccess){
                    this.isLoggedIn = true;
                    this.token = body.token;

                    return true;
                }


            })
            .catch((err: Response | any, caught: Observable<boolean>) => {
                let body, allowAccess;
                if(err instanceof  Response){
                    body = err.json();
                    allowAccess = body.allowAccess;
                }

                return Observable.throw(allowAccess);

            });

    }

    private extractData(res: Response){
        let body = res.json();


        if(body.allowAccess){
            this.isLoggedIn = true;
            this.token = body.token;



            return true;
        }

    }

    private handleError(error: Response){

        if(error instanceof  Response){
            console.log('allowAccess = false');
        }

        return false;
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
