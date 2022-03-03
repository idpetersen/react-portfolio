import React from "react";
import projects from "../projects.json";
import "../styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

function Cards(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.methods}</Card.Text>
        <Button variant="primary">
          <Card.Link className="git-link" href={props.github}>Repository</Card.Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

function Wrapper(props) {
  return <div className="card-wrapper">{props.children}</div>;
}

function Projects() {
  return (
    <>
      <div className="main-body">
        <h1 className="title">Projects</h1>
      </div>

      <Wrapper>
        {projects.map((project) => {
          return (
            <Cards
              name={project.name}
              key={project.id}
              image={project.image}
              methods={project.methods}
              github={project.github}
            />
          );
        })}
      </Wrapper>
    </>
  );
}

export default Projects;
