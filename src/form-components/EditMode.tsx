import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [isStudent, setStudent] = useState<boolean>(true);
    const [isEditing, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");

    function changeStudent() {
        setStudent(!isStudent);
    }

    function editMode() {
        setMode(!isEditing);
    }

    function editName(event: ChangeEvent) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <div>
                    {isEditing ? (
                        <div>
                            <Form.Check
                                inline
                                type="switch"
                                id="is-student-check"
                                label="Are you a student?"
                                checked={isStudent}
                                onChange={changeStudent}
                            />
                            <Form.Group controlId="nameInput">
                                <Form.Label>Enter name</Form.Label>
                                <Form.Control
                                    value={name}
                                    onChange={editName}
                                    placeholder={name}
                                />
                            </Form.Group>
                        </div>
                    ) : (
                        <div>
                            {name}
                            {isStudent ? " is a student" : " is not a student"}
                        </div>
                    )}
                </div>
                <div>
                    <Form.Check
                        inline
                        type="switch"
                        id="is-editing-check"
                        label="Edit Mode"
                        checked={isEditing}
                        onChange={editMode}
                    />
                </div>
            </div>
        </div>
    );
}
