import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  template: `
    
    <app-question-list></app-question-list>
  `,
  styles: []
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
