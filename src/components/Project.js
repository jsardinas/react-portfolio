import React from 'react';


function Project({repoLink, deploymentLink, thumbnail}) {
  return (
    <div className="col-sm-6 work-tile">
        <a href={repoLink} class="repo" target="_blank" rel="noreferrer">{repoLink}</a>
        <a href={deploymentLink} target="_blank" rel="noreferrer">
            <img src={thumbnail} class="img-responsive margin" style={{width:"100%"}} alt="project thumbnail"/>
        </a>
    </div>
  );
}

export default Project;
