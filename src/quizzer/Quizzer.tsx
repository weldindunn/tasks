import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../quizzer-interfaces/quiz";
import { QuizList } from "../quizzer-components/QuizList";
import quizzes from "./quizzes.json";
import sketch from "./sketch.jpg";

const QUIZZES = quizzes.map((quiz): Quiz => ({ ...quiz, numPoints: 0 }));

export function Quizzer(): JSX.Element {
    const [quizzes /*, setQuizzes*/] = useState<Quiz[]>(QUIZZES);

    return (
        <div>
            <h3>Quizzer</h3>
            <QuizList quizzes={quizzes}></QuizList>
            <Button>Add Quiz</Button>

            <div>
                <img src={sketch} width="600" height="auto" />
            </div>
            <br />
            <div className={"comp-features"}>
                <span>Completed Features:</span>
                <ol>
                    <li>Application is Sketched</li>
                    <li>Quizzes are Visible</li>
                    <li></li>
                </ol>
            </div>
        </div>
    );
}
