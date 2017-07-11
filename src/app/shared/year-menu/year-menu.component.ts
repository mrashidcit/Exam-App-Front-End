import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-year-menu',
  templateUrl: './year-menu.component.html',
  styleUrls: ['./year-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class YearMenuComponent implements OnInit {

  years: [{id: number, name: String}];

  constructor() { }

  ngOnInit() {
    this.years = [
      {id: 1 , name: "2011"},
      {id: 2 , name: "2012"},
      {id: 3 , name: "2013"},
      
    ];

  }

}
