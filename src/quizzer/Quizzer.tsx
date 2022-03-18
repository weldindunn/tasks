import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question, QuestionType } from "../quizzer-interfaces/question";
import { Quiz } from "../quizzer-interfaces/quiz";
import { QuizList } from "../quizzer-components/QuizList";
import quizzes from "./quizzes.json";
import questions from "./questions.json";
import sketch from "./sketch.jpg";

const QUIZZES = quizzes.map((quiz): Quiz => ({ ...quiz }));
const QUESTIONS = questions.map(
    (question): Question => ({ ...question, options: [] })
);

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);

    return (
        <div>
            <h3>Quizzer</h3>
            <QuizList quizzes={quizzes}></QuizList>
            <Button>Add Quiz</Button>

            <div>
                <img src={sketch} width="600" height="auto" />
            </div>
        </div>
    );
}
