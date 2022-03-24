import React, { useState } from "react";
import { Container, Row, Button, Col, Form } from "react-bootstrap";
import { Question } from "../quizzer-interfaces/question";
import { QuestionEditMode } from "./QuestionEditMode";

export function QuestionView({
    question,
    deleteQuestion,
    editQuestion /*,
    enterAnswer*/
}: {
    question: Question;
    deleteQuestion: (name: string) => void;
    editQuestion: (name: string, newQuestion: Question) => void;
    //enterAnswer: (name: string, answer: string) => void;
}): JSX.Element {
    const [isEditing, setMode] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>("");

    function editMode() {
        setMode(!isEditing);
    }

    function clearAnswer() {
        setAnswer("");
    }

    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        //enterAnswer(question.name, answer);
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <QuestionEditMode
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
                                    <Form.Group as={Row}>
                                        <Form.Label>Answer: </Form.Label>
                                        <Form.Control
                                            value={answer}
                                            onChange={changeAnswer}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Col>
                                        {answer === question.correctAnswer ? (
                                            <span>Correct!</span>
                                        ) : (
                                            <span></span>
                                        )}
                                    </Col>
                                    <Col>
                                        <Button onClick={clearAnswer}>
                                            Clear Answer
                                        </Button>
                                    </Col>
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
