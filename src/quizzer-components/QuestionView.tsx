import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { Question } from "../quizzer-interfaces/question";
import { QuestionEditMode } from "./QuestionEditMode";

export function QuestionView({
    questions,
    question,
    deleteQuestion,
    editQuestion
}: {
    questions: Question[];
    question: Question;
    deleteQuestion: (name: string) => void;
    editQuestion: (name: string, newQuestion: Question) => void;
}): JSX.Element {
    const [isEditing, setMode] = useState<boolean>(false);

    function editMode() {
        setMode(!isEditing);
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <QuestionEditMode
                                    questions={questions}
                                    question={question}
                                    deleteQuestion={deleteQuestion}
                                    editQuestion={editQuestion}
                                    editMode={editMode}
                                ></QuestionEditMode>
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                </div>
            ) : (
                <div>
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
                                <Row>
                                    <span>Enter Answer input box</span>
                                </Row>
                            </Col>
                            <Col>
                                <Button>Submit</Button>
                                <br />
                                <Button onClick={editMode}>
                                    Edit Question
                                </Button>
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                </div>
            )}
        </div>
    );
}
