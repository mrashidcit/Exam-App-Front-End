export class Question {
    id: number;
    board_id: number;
    year_id: number;
    class_id: number;
    subject_id: number;
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correct_option: string;

    user_answer: string; // contains user answer
    correct: boolean; // True if user_answer is correct otherwise False

    constructor(subject_id: number){
        this.id = 0;
        this.board_id = 0;
        this.year_id = 0;
        this.class_id = 0;
        this.subject_id = subject_id;

        this.question = '';
        this.a = '';
        this.b = '';
        this.c = '';
        this.d = '';
        this.correct_option = '';
        this.user_answer = '';
        this.correct = false;


    } // end constructor()







}
