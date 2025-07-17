import { useEffect } from 'react';
import Typed from 'typed.js';
import "../styles/Home.css";

const Home = () => {
    useEffect(() => {
      const typed = new Typed('#element', {
        strings: ['<i>Full Stack</i>', '<i>Web Developer</i>', '<i>Vlogger</i>', '<i>Video Editor</i>'],
        typeSpeed: 80,
        loop: true,
      });
     }, []);
    return (
      <section className="firstsection">
        <div className="leftsection">
          <div>
            Hi, My name is <span className="purple">Sagar</span>
            <div>and I am a passionate</div>
            <span id="element"></span>
          </div>
        </div>
        <div className="rightsection">
          <img src="/dev.webp" alt="Image" />
        </div>

      </section>
    );
  };
  
  export default Home;