import React from 'react';
import github from './web-photos/github-icon-white-6.jpg';
import linkedin from './web-photos/linkedin-3-xxl.png';

function Footer() {
  return (
    <div className="footer">
      <div className="socialmediacontainer">
      <a href="https://www.linkedin.com/in/allisonquiroz/" rel="noopener noreferrer" target="_blank">
        <img id="linkedin" src={linkedin} alt="linkedin-icon"/>
      </a>
      <a href="https://github.com/allicue/" rel="noopener noreferrer" target="_blank"> 
        <img id="github" src={github} alt="github-icon"/>
      </a>
      </div>

    </div>
  );
}

export default Footer;