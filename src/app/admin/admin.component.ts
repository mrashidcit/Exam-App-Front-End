import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
      <ul class="nav nav-tabs">
      
        <li role="presentation"><a routerLink="./new-question">Add New Question</a></li>
        <li role="presentation"><a routerLink="./manage-questions">Manage Questions</a></li>
        <li role="presentation"><a routerLink="./quiz-management">Quiz</a></li>
      
      
      </ul>
      
      <router-outlet></router-outlet>
    

`
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
