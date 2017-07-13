import { Board } from '../../interfaces/board.interface';
import { BoardService } from '../../services/board.service';

import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-board-menu',
  templateUrl: './board-menu.component.html',
  styleUrls: ['./board-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardMenuComponent implements OnInit {

  @Output() sendBoard = new EventEmitter<Board>();

  board_id: number; // contains board_id of selected board
  currentBoard: Board;


  boards: Board[];

  constructor(
    private boardService: BoardService
  ) { }

  ngOnInit() {

    this.getBoards();

  }

  getBoards(){

    this.boardService.getBoards()
      .subscribe(
        (boards: Board[]) => {
          this.boards = boards;
          this.currentBoard = boards[0];

        },
        (error: Response) => console.log('error')
      );

  } // end getboards()

  // Send Board Object to the Ouput of the component
  send(){
    let boards = this.boards
        .filter((board: Board) => board.id === this.board_id);

    this.currentBoard = boards[0];
    this.sendBoard.emit(this.currentBoard);

  }




}
