import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function adjustColor(event: ChangeEvent) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Label>Was ist deine Lieblingsfarbe?</Form.Label>
                <br></br>
                {COLORS.map((col: string) => (
                    <Form.Check
                        inline
                        key={col}
                        label={col}
                        value={col}
                        type="radio"
                        name="colors"
                        onChange={adjustColor}
                        checked={color === col}
                        style={{ backgroundColor: col }}
                    />
                ))}
            </Form.Group>
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                Du hast {color} getroffen.
            </span>
        </div>
    );
}
