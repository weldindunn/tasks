import { Question } from "./question";

/** A representation of a Question in a quizzing application */
export interface Quiz {
    title: string; //Title of quiz
    description: string; //Description of quiz
    questions: Question[]; //Quiz's questions
    numPoints: number; //Number of points quiz-taker has in the quiz
    numQuestions: number; //Number of questions in the quiz
}
