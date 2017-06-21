import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
    isLoggedIn = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(): Observable<boolean> {
        return Observable.of(true)
            .delay(1000)
            .do(val => this.isLoggedIn = true);
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
