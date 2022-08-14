import React from 'react';
import '../styles/Project.css'


function Project({name, repoLink, deploymentLink, thumbnail, stack}) {
  return (
    <div className="col-sm-6 work-tile">
      
      <a href={deploymentLink} target="_blank" rel="noreferrer">
          <img src={thumbnail} class="img-responsive margin" style={{width:"100%"}} alt="project thumbnail"/>
      </a>

      <div className='ghost'>
        <h3 className='work-tile-title'> {name} &nbsp;<a href={repoLink} target="_blank" rel="noreferrer"><img src={require("../img/githubappicon.jpg")} style={{height:"24px", width:"24px", border: '0px', display:'inline'}} alt='guthub'/></a></h3>
        
        <p>{stack}</p>
      </div>

    </div>
  );
}

export default Project;
