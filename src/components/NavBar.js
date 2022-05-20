import React from "react";

function NavBar() {
  // an array with 3 strings representing each link on a page
  // -for each string create and <a> tag
  //render each item in array-->map
  const links = ["home", "about", "projects"];
  const anchors = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>

  ));
  return <nav>{anchors}</nav>
}


export default NavBar;
  
// return <nav>
// <a href="#home">home</a>
// <a href="#about">about</a>
// <a href="#projects">projects</a>
// </nav>;
// }
