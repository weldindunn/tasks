import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="answerChecker">
                <Form.Label></Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                    placeholder="Enter Answer"
                />
            </Form.Group>
            <div>
                {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </div>
        </div>
    );
}
