import React from 'react';
import Project from './Project';

// import resources
import projects from '../data/projects'


function Portfolio() {
  return (
    <div class="row">
      {projects.map(p => <Project repoLink={p.repoLink} deploymentLink={p.deploymentLink} thumbnail={p.imgsrc}/>)}
      
    </div>
  );
}

export default Portfolio;
