import {Component, Input, Output, OnInit, OnChanges, EventEmitter} from '@angular/core';

import {Question} from "../../interfaces/question.interface";
import {QuestionService} from "../../question.service";
import {ViewChild} from "@angular/core/src/metadata/di";




@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit, OnChanges {

  @Input() question: Question; // Contains currently Selected Question Data
  @Output() showEditStatus = new EventEmitter<boolean>();


  showMsg: boolean = false;

  showEdit: boolean = false;

  submitted: boolean = false;


  constructor(
      private questionService: QuestionService,
  ) { }

  ngOnChanges(){

  }
  ngOnInit() {
  }

  onSubmit(): void {
    this.submitted = true;
    this.updateQuestion();

  }

  @ViewChild("myQuestion") txtArea;

  updateQuestion(){
    this.questionService.updateQuestion(this.question, this.question.id)
        .then(question => {
          this.question = question;
          this.showMessage();

          this.setFocusonQuestionTextBox();
        });

  }

  setFocusonQuestionTextBox() {
    // Setting Focus on Question TextArea

    this.txtArea.nativeElement.focus();

  }


  showMessage() {
    this.showMsg = true;

    setTimeout(
        () => {this.showMsg = false;}, 3000
    );


  }



  sendShowEditStatus(){
    this.showEditStatus.emit(this.showEdit);
    //console.log("sendShowEditStatus = " + this.showEdit);

  }

}
