import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

interface memberProps {
    allOptions: string[];
    team: string[];
    setTeam: (team: string[]) => void;
}

function ChooseMember({ allOptions, team, setTeam }: memberProps): JSX.Element {
    return (
        <ul>
            {allOptions.map((option: string) => (
                <div key={option} style={{ marginBottom: "4px" }}>
                    Add{" "}
                    <Button
                        onClick={() =>
                            !team.includes(option)
                                ? setTeam([...team, option])
                                : setTeam([...team])
                        }
                        size="sm"
                    >
                        {option}
                    </Button>
                </div>
            ))}
        </ul>
    );
}

interface clearProps {
    team: string[];
    setTeam: (team: string[]) => void;
}

function ClearTeam({ team, setTeam }: clearProps): JSX.Element {
    return (
        <div>
            <strong>Team:</strong>
            {team.map((member: string) => (
                <li key={member}>{member}</li>
            ))}
            <Button onClick={() => setTeam([])}>Clear Team</Button>
        </div>
    );
}

export function ChooseTeam(): JSX.Element {
    const [allOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    <ChooseMember
                        allOptions={allOptions}
                        team={team}
                        setTeam={setTeam}
                    ></ChooseMember>
                </Col>
                <Col>
                    <ClearTeam team={team} setTeam={setTeam}></ClearTeam>
                </Col>
            </Row>
        </div>
    );
}
