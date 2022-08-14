import React from 'react';


function Header() {
  return (
    <div className='about'>
      <h2>About me</h2>
      <br/>
      <img src={require("../img/bayernavatar.jpeg")} className="img-responsive img-circle margin" alt="bayern tux avatar" width="120" height="200"/>
      <br/>
      <h3 class="title">Full stack developer</h3>
      <br/>
      <br/>
      <p>Aspiring web developer with a background in mathematics.</p>
      <br/>
      <p>About six months of industry experience includes React, HTML, CSS, JavaScript, Bootstrap, jQuery, SQL, MongoDB, GraphQL, Node.js, Express.js, MVC and Git.</p>
      <br/>
      <p>Strong skills include bathing my dogs without getting too wet (they are big dogs), eating a bag of german cookies from H-E-B without sharing and solving the Rubik Cube in under a minute.</p>
    </div>
  );
}

export default Header;
