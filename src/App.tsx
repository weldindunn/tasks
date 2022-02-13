import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Well, this is neat. -Weldin</p>
            <Button onClick={() => console.log("Logged as a lumberjack.")}>
                Click me!
            </Button>
            <Container>
                <Row>
                    <Col>What&apos;s this, some sort of column?</Col>
                    <Col>
                        Second column! Here&apos;s a meme I found:
                        <img
                            src="../assets/images/meme.jpg"
                            alt="It's a history meme."
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
