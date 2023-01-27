import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://github.com/ali1397hassnain"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/alihassnainhere/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    {/* <div>
      <BsInstagram />
    </div> */}
  </div>
);

export default SocialMedia;
