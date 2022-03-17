import React from "react";
import { Container, Row } from "react-bootstrap";
import { Quiz } from "../quizzer-interfaces/quiz";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <Container>
            <Row>
                <h3>{quiz.title}</h3>
            </Row>
        </Container>
    );
}
