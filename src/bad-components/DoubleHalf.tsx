import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface dhProps {
    setDHValue: (newValue: number) => void;
    dhValue: number;
}

function Doubler({ setDHValue, dhValue }: dhProps): JSX.Element {
    return <Button onClick={() => setDHValue(2 * dhValue)}>Double</Button>;
}

function Halver({ setDHValue, dhValue }: dhProps): JSX.Element {
    return <Button onClick={() => setDHValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDHValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDHValue={setDHValue} dhValue={dhValue}></Doubler>
            <Halver setDHValue={setDHValue} dhValue={dhValue}></Halver>
        </div>
    );
}
