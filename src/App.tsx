import React from "react";
import "./App.css";
import meme from "./images/meme.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h2>UD CISC275 with React Hooks and TypeScript</h2>
            </header>
            <p>Well, this is neat. -Weldin</p>
            <p>Also, Hello World</p>
            <p>Guess I&apos;ll rank the Indiana Jones movies</p>
            <ol>
                <li>Last Crusade</li>
                <li>Raiders of the Lost Ark</li>
                <li>Temple of Doom</li>
                <li>Kingdom of the Crystal Skull</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <br></br>
            <img src={meme} alt="A History Meme" width="290" height="256" />
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "300px",
                                height: "150px",
                                backgroundColor: "#C83030",
                                margin: "auto"
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "300px",
                                height: "150px",
                                backgroundColor: "#C83030",
                                margin: "auto"
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
