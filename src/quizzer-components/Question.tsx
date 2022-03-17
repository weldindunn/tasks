import React, { useState } from "react";

type QuestionType = "multi-choice" | "short-answer";

export function Question(): JSX.Element {
    const [name, setName] = useState<string>("Name"); //Name of question
    const [correctAnswer, setCorrectAnswer] = useState<string>(""); //The correct answer to the question
    const [body, setBody] = useState<string>("Question Body"); //The body of the question
    const [numPoints, setNumPoints] = useState<number>(0); //Number of points the question is worth
    const [isPublished, setPublished] = useState<boolean>(true); //Whether or not the question is published
    const [isCorrect, setCorrect] = useState<boolean>(true); //Whether or not the given answer is correct
    const [type, setType] = useState<QuestionType>("multi-choice"); //Whether the quesiton is multi-choice or short answer
    const [choices] = useState<string[]>([]); //Array of string to represent multi-choice options

    return <div></div>;
}
