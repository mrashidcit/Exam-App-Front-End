import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-board-menu',
  templateUrl: './board-menu.component.html',
  styleUrls: ['./board-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardMenuComponent implements OnInit {

  boards: [{id: number, name: String}];

  constructor() { }

  ngOnInit() {
    this.boards = [
      {id: 1, name: "Lahore"},
      {id: 2, name: "Faisalabad"},
      {id: 3, name: "Gujrawala"},
      
    ];
    //this.boards.push({id: 1, name: "Lahore"});
    /*this.boards[1] = "Faisalabad";
    this.boards[2] = "Gujrawala";
    */

  }

}
