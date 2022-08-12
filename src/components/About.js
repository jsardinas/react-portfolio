import React from 'react';


function Header() {
  return (
    <div className='about'>
      <h2>About me</h2>
      <br/>
      <img src={require("../img/bayernavatar.jpeg")} className="img-responsive img-circle margin" alt="bayern tux avatar" width="120" height="200"/>
      <br/>
      <h3 class="title">Full stack developer</h3>
      <p>Aspiring web developer with a background in mathematics. About four months of industry experience includes Git, HTML, CSS, JavaScript, Bootstrap, jQuery, SQL, Node.js, express.js, MVC and ORMs. Strong skills include bathing my dogs without getting too wet (they are big dogs), eating a bag of german cookies from H-E-B without sharing and solving the Rubik Cube in under a minute.</p>
    </div>
  );
}

export default Header;
