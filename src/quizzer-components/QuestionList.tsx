import React from "react";
import { Stack } from "react-bootstrap";
import { Question } from "../quizzer-interfaces/question";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions,
    deleteQuestion,
    editQuestion /*,
    enterAnswer*/
}: {
    questions: Question[];
    deleteQuestion: (name: string) => void;
    editQuestion: (name: string, newQuestion: Question) => void;
    //enterAnswer: (name: string, answer: string) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((question: Question) => (
                <div key={question.name}>
                    <QuestionView
                        question={question}
                        deleteQuestion={deleteQuestion}
                        editQuestion={editQuestion}
                        //enterAnswer={enterAnswer}
                    ></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
