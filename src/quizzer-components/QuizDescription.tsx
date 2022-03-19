import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../quizzer-interfaces/quiz";

export function QuizDescription({ quiz }: { quiz: Quiz }): JSX.Element {
    const [description, setDescription] = useState<string>(quiz.description);

    function adjustDescription(): void {
        description === quiz.description
            ? setDescription(quiz.description.substring(0, 12) + "...")
            : quiz.description;
        console.log(description + ", " + quiz.description);
    }

    return (
        <div>
            <span>{description}</span>
            <br />
            <Button onClick={adjustDescription}>More/Less</Button>
        </div>
    );
}
