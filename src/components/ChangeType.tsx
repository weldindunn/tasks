import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    type qType = "short_answer_question" | "multiple_choice_question";
    const [qType, changeType] = useState<QuestionType>("short_answer_question");

    function qChanger(): void {
        changeType(
            qType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <Button onClick={qChanger}>Change Type</Button>
            {qType === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
