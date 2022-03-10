import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [remAttempts, setRemAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<number>(0);

    function addAttempts() {
        isNaN(reqAttempts)
            ? setRemAttempts(remAttempts)
            : setRemAttempts(reqAttempts + remAttempts);
    }

    function requestAttempts(event: ChangeEvent) {
        setReqAttempts(parseInt(event.target.value));
    }

    function decAttempts() {
        setRemAttempts(remAttempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Remaining Attempts: {remAttempts}</span>
            <Form.Group controlId="attemptInput">
                <Form.Label>Need more attempts? Try this!</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts.toString()}
                    onChange={requestAttempts}
                    placeholder="Enter Attempts Requested"
                />
            </Form.Group>
            <Button onClick={addAttempts}>gain</Button>
            <Button onClick={decAttempts} disabled={remAttempts < 1}>
                use
            </Button>
        </div>
    );
}
