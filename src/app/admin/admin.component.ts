import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
      <ul class="nav nav-tabs">
      
        <li role="presentation"><a routerLink="./new-question">Add New Question</a></li>
        <li role="presentation"><a routerLink="./manage-questions">Manage Questions</a></li>
        <li role="presentation"><a routerLink="">Quiz</a></li>
      
      
      </ul>
      
      <router-outlet></router-outlet>
    

`,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
