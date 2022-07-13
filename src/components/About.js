import React from "react";


function About(props) {

  function CheckBio() {
   if(props.bio && props.bio.length > 1){
      return <p>{props.bio}</p>
      }else{
        return null
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <CheckBio />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default About;
