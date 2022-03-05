import React, { useState } from "react";
/*import { button } from "react-bootstrap";*/

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <button onClick={flipVisibility}>Reveal Answer</button>
            {visible && <div>42</div>}
        </div>
    );
}
