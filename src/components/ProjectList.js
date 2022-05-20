//prop of projects being passed from App comp. with an array of objects
//for each object of array, render one ProjectItem comp. with correct props
//-----use id of project for the key prop


import React from "react";
//import from ProjectItem to render 
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //console.log(projects);
    //map through each project item
  const projectArr = projects.map((project) => (
// use key id (each id id value is unique)
//retrieve key values from projects obj
  <ProjectItem 
  key={project.id}
  name={project.name}
  about={project.about}
  technologies={project.technologies}  //why is project singular? 
  />
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectArr}</div>
    </div>
  );
}

// function ProjectList(props) {
//   const projects = props.projects;
//   const projectArr = projects.map(()=>


//   );
// }




export default ProjectList;
