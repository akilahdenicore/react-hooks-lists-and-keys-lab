
//this comp. needs prop of technologies passed down from ProjectList
//-----for each element of array of technologies, create a span tag that displays
//      name of technologies 


import React from "react";



//pass projects id through function
function ProjectItem({name, about, technologies}) {
  //declare technology variable, map through values
  const technologiesList = technologies.map((item) => (
    //create span tag for each technologies value with KEY
    <span key={item}>{item}</span> 
  ));
  return (
    <div className="project-item">
    <h3>{name}</h3>
    <p>{about}</p>
    {/* input technologyList variable declared above */}
    <div className="technologies">{technologiesList}</div>
    </div>
  );
}


// function ProjectItem({ name, about, technologies }) {
//   return (
//     <div className="project-item">
//       <h3>{name}</h3>
//       <p>{about}</p>
//       <div className="technologies">
//         {/* render a <span> for each technology in the technologies array */}
//       </div>
//     </div>
//   );
// }

export default ProjectItem;
