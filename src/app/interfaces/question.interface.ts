export class Question {
    id: number;
    subject_id: number;
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correct_option: string;

    constructor(subject: number){
        this.id = 0;
        this.subject_id = 4;
        this.question = '';
        this.a = '';
        this.b = '';
        this.c = '';
        this.d = '';
        this.correct_option = '';



    }


}