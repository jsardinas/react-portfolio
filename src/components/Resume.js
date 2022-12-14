import React from 'react';
import '../styles/Resume.css'

function Resume() {
  return (
    <div className='resume'>
      <h1>Resume</h1>
      <a className='download' href="docs/resume.pdf" download="resume.pdf"> Download</a>

      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>DynamoDB</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}

export default Resume;
