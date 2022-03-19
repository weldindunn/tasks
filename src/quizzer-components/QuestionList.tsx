import React from "react";
import { Stack } from "react-bootstrap";
import { Question } from "../quizzer-interfaces/question";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions
}: {
    questions: Question[];
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((question: Question) => (
                <div key={question.name}>
                    <QuestionView question={question}></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
