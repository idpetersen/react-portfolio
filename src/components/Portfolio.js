import React from "react";
import projects from '../projects.json'
import '../styles/Portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Card (props){
    return (
        <div>
            <div className="card img-wrapper">
                <img className='project-image' src={props.image}>
                <div className="text-wrapper">
                    <p className='top-text'>{props.name}</p>
                    <p className='bottom0-text'>{props.methods}</p>
                    <a href={props.github}><img className='gitHub-logo' src='../assets/github.png' alt='github logo'></img></a>
                </div>
                </img>
            </div>
        </div>
    )
}

function Wrapper(props){
    return (
        <div className="card-wrapper">{props.children}</div>
    )
}

function Projects (){
    return(
    <>
    <div className="main-body">
    <h1 className="title">Projects</h1>
    </div>

        <Wrapper>
            {projects.map((project) =>{
                <Card
                name={project.name}
                key={project.id}
                image={project.image}
                methods={project.methods}
                github={project.github}
                />
            })}
        </Wrapper>
    </>
    )
}

export default Projects