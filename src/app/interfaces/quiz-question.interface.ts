export class QuizQuestion {
    id: number;
    subject_id: number;
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correct_option: string;

    user_answer: string; // contains user answer

    static total_marks: number;
    static obtained_marks: number;

    constructor(subject_id: number){
        this.id = 0;
        this.subject_id = subject_id;
        this.question = '';
        this.a = '';
        this.b = '';
        this.c = '';
        this.d = '';
        this.correct_option = '';


    }


}