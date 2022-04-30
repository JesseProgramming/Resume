import './stylesheets/MainStyle.scss';
import catPicture from '../src/images/kitten.jpg';
import Tesla_Image from '../src/images/TeslaPage.JPG';
import JJ_Image from '../src/images/JimmyJohnsPage.JPG';
import API_Image from '../src/images/api-image.png';
import Data_Image from '../src/images/DataImage.JPG';
import ProjectCards from './componets/ProjectCards.tsx';

function NewApp() {
  return (
    <div >
      <div id="bg-image"></div>
      <div id="grad"></div>
        <div className="App-header">
          <nav>
            <ul>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Resume</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        
          <header className = "mainHeader">
            <div className="header-content">
              <h1>Jesse James Clem</h1>
              <h2>Front End Web Developer</h2>
              <p>I'm driven to create user friendly sites with highly optimized and clean code.</p>
            </div>
          </header>
        </div>
        <ProjectCards/>
        <div className="Skills-Section">
          <h2>Skills</h2>
        </div>
        <div className="Contact-Section">
          <h2>Contact</h2>
        </div>
        <main>
        </main>
    </div>
  );
}

export default NewApp;
