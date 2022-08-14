import React from 'react';
import Project from './Project';

// import resources
import projects from '../data/projects'


function Portfolio() {
  return (
    <div class="row">
      {projects.map(p => <Project name={p.name} repoLink={p.repoLink} deploymentLink={p.deploymentLink} thumbnail={p.imgsrc} stack={p.stack}/>)}
    </div>
  );
}

export default Portfolio;
