import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question } from "../quizzer-interfaces/question";
import { Quiz } from "../quizzer-interfaces/quiz";
import { QuizList } from "../quizzer-components/QuizList";
import quizSamples from "../data/quizzes.json";

//const QUIZZES = quizSamples.map((quiz: Quiz): Quiz => ({ ...quiz }));

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);

    return (
        <div>
            <h3>Quizzer</h3>
            <QuizList quizzes={quizzes}></QuizList>
            <Button>Add Quiz</Button>
        </div>
    );
}
