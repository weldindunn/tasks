import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { Quiz } from "../quizzer-interfaces/quiz";
import { QuizDescription } from "./QuizDescription";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
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
                    <Button>Take Quiz</Button>
                </Col>
            </Row>
            <hr />
        </Container>
    );
}
