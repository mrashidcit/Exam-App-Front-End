import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  template: `
    <h2>Questions</h2>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
