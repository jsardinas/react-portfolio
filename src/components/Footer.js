import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="bg-4 text-center horizontal-footer">
        <ul>
            <li>📱(352) 484-2035</li>
            <li>📧 <a href="mailto:javier.sardinas@gmail.com">javier.sardinas@gmail.com</a></li>
            <li><img src={require("../img/githubappicon.jpg")} height="16px" width="16px"/> <a href="https://github.com/jsardinas" target="_blank">jsardinas</a></li>
            <li><img src={require("../img/in.png")} height="16px" width="16px" alt="LinkedIn"/> <a href="https://www.linkedin.com/in/javier-sardi%C3%B1as-41b1a465/" target="_blank">Javier Sardi&#241;as</a></li>
        </ul>
    </footer>
  );
}

export default Footer;
