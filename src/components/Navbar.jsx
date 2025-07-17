import "../styles/Navbar.css";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <header>
      <nav>
        <div className="left">
          <b>Sagar's Portfolio</b>
        </div>
        <div className="right">
          <ul>
            <li><Link className="nav-link" to="firstsection" smooth={true} duration={500}>Home</Link></li>
            <li><Link className="nav-link" to="secondSection" smooth={true} duration={600}>About</Link></li>
            <li><Link className="nav-link" to="wow" smooth={true} duration={800}>Projects</Link></li>
            <li><Link className="nav-link" to="contact" smooth={true} duration={800}>Contact Me</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
