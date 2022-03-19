import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { Question } from "../quizzer-interfaces/question";

export function QuestionView({
    question
}: {
    question: Question;
}): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>{question.name}</h3>
                    <Row>
                        <Col>
                            <span>{question.body}</span>
                        </Col>
                        <Col>
                            <span>
                                {question.numPoints} {"Points"}
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
