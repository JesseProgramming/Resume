import './stylesheets/MainStyle.scss';
import ProjectCards from './componets/ProjectCards.tsx';
import SkillsCards from './componets/SkillsCards.tsx';
import NavBar from './componets/NavBar.tsx';

function App() {
  return (
    <div > 
      <div id="bg-image"></div>
      <div id="grad"></div>
      <div id="galx"></div>
      <NavBar/>
        <div className="App-header">        
          <header className = "mainHeader">
            <div className="header-content">
              <h1>Jesse James Clem :)</h1>
              <h2>Front End Web Developer</h2>
              <p>I'm driven to create user friendly sites with highly optimized and clean code.</p>
            </div>
          </header>
          
        </div>
        <ProjectCards/>
        
        <div className="Skills-Section" id="Skills-Section">
        <SkillsCards/>
        </div>
        <div className="Contact-Section"id="Contact">
          <h2>Contact</h2>
        </div>
    </div>
    
  );
}

export default App;
//<NavBar/>