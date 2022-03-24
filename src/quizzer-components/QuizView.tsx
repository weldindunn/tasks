import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { Quiz } from "../quizzer-interfaces/quiz";
import { QuizDescription } from "./QuizDescription";
import { Question } from "../quizzer-interfaces/question";
import { QuestionList } from "./QuestionList";
import questions from "../quizzer/questions.json";

const QUESTIONS = questions.map((question): Question => ({ ...question }));

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [questionsVisible, setQuestionsVisible] = useState<boolean>(false);
    const [questions, setQuestions] = useState<Question[]>(QUESTIONS);

    function editQuestion(name: string, newQuestion: Question): void {
        setQuestions(
            questions.map(
                (question: Question): Question =>
                    question.name === name ? newQuestion : question
            )
        );
    }

    function deleteQuestion(name: string): void {
        setQuestions(
            questions.filter(
                (question: Question): boolean => question.name !== name
            )
        );
    }

    function makeQuestionsVisible(): void {
        setQuestionsVisible(true);
    }

    function makeQuestionsInvisible(): void {
        setQuestionsVisible(false);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    <Row>
                        <Col>
                            <QuizDescription quiz={quiz}></QuizDescription>
                        </Col>
                        <Col>
                            <span>
                                {quiz.numQuestions} {"Questions"}
                            </span>
                            <br />
                            <span>
                                {quiz.numPoints} {"Points"}
                            </span>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Button onClick={makeQuestionsVisible}>Take Quiz</Button>
                </Col>
            </Row>
            <div>
                {questionsVisible ? (
                    <div>
                        <QuestionList
                            questions={questions}
                            deleteQuestion={deleteQuestion}
                            editQuestion={editQuestion}
                        ></QuestionList>
                        <Button onClick={makeQuestionsInvisible}>
                            End Quiz
                        </Button>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            <hr />
        </Container>
    );
}
