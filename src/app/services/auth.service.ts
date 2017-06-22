import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Headers, Http, Response} from "@angular/http";
import {User} from "../interfaces/user.interface";


@Injectable()
export class AuthService {
    isLoggedIn = false;
    token: string;
    user = <User>{} ;


    private authUrl = 'http://localhost:8000/api/authenticate'; // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    // store the URL so we can redirect after logging in
    redirectUrl: string;


    login(): Observable<boolean> {


        this.user.email = "mrashidcit@gmail.com";
        this.user.password = "secret";

        return this.http.post(this.authUrl, JSON.stringify(this.user),
                    {headers: this.headers})
            .map((res: Response) => {
                if(res.json().access){
                    this.isLoggedIn = true;
                    this.token = res.json().token;


                    return true;
                }

                return false;
            });

        /*
        return Observable.of(true)

            .delay(1000)
            .do(val => this.isLoggedIn = true);

        */
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
