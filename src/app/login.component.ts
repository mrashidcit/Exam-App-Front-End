import { Component, OnInit } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
        <button (click)="login()" 
            *ngIf="!authService.isLoggedIn">Login</button>
            
        <button (click)="logout()" 
            *ngIf="authService.isLoggedIn">Logout</button>
            
            
    </p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(
      public authService: AuthService,
      public router: Router
  ) { }

  setMessage(){
    this.message = 'Logged ' +
        (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login()
        .subscribe(() => {
          this.setMessage();
          if(this.authService.isLoggedIn){
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            let redirect = this.authService.redirectUrl ?
                            this.authService.redirectUrl : '/admin';

            // Set our navigation extras object
            // that passes on our global query params and fragment
            let navigationExtras: NavigationExtras = {
              preserveQueryParams: true,
              preserveFragment: true
            };

            // Redirect the user
            this.router.navigate([redirect], navigationExtras);
          }
        });
  } // end login()

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  ngOnInit() {
  }

}
