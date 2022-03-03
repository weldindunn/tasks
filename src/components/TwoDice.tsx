import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState(5);
    const [right, setRight] = useState(6);

    function rollL(): void {
        setLeft(d6);
    }

    function rollR(): void {
        setRight(d6);
    }

    return (
        <div>
            <Button onClick={rollL}>Roll Left</Button>
            <Button onClick={rollR}>Roll Right</Button>
            <div>
                Left Die: <span>{left}</span>
                <br></br>
                Right Die: <span>{right}</span>
            </div>
            {left === right && left !== 1 ? (
                <span>You Win!</span>
            ) : left === right && left === 1 ? (
                <span>You Lose.</span>
            ) : (
                <span></span>
            )}
        </div>
    );
}
