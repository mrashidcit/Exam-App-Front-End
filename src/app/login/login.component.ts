
import { Component, OnInit } from '@angular/core';

import {Router, NavigationExtras} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {User} from "../interfaces/user.interface";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  message: string;
  user: User;
  showErrMsg: boolean = false;
  isLoggedIn: boolean = false;

  constructor(
      public authService: AuthService,
      public router: Router
  ) { }

  setMessage(){
    this.message = 'Logged ' +
        (this.authService.isLoggedIn ? 'in' : 'out');
  }

  resetMessage(){
    this.message = '';
  }

  resetShowErrMsg(){
    this.showErrMsg = false;
  }

  login() {
    this.message = 'Trying to log in ...';
    this.resetShowErrMsg();


    this.authService.login(this.user)
        .subscribe((status) => {
          this.setMessage();
          this.isLoggedIn = status;
          //console.log('in login() ' + this.isLoggedIn);
          if(this.isLoggedIn){
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
            this.router.navigate([redirect]);
          }
          /*else {
            this.showErrMsg = true;
            this.message = '';
          } */

        },
        error => {
          this.showErrMsg = error;
          this.resetMessage();


        });
  } // end login()

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  ngOnInit() {
    this.user= <User>{
      'email':'mrashidcit@gmail.com',
      'password': 'secret'
    };
  }

}
