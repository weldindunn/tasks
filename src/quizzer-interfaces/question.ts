/** QuestionType influences how a question is asked and what kinds of answers are possible */
export type QuestionType = "multiple_choice_question" | "short_answer_question";

/** A representation of a Question in a quizzing application */
export interface Question {
    name: string; //Name of question
    body: string; //The body of the question
    correctAnswer: string; //The correct answer to the question
    type: QuestionType; //Whether the quesiton is multi-choice or short answer
    options: string[]; //Array of string to represent multi-choice options
    numPoints: number; //Number of points the question is worth
    isPublished: boolean; //Whether or not the question is published
}
