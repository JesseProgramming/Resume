import catPicture from '../src/images/kitten.jpg';
import Tesla_Image from '../src/images/TeslaPage.JPG';
import JJ_Image from '../src/images/JimmyJohnsPage.JPG';
import API_Image from '../src/images/api-image.png';
import Data_Image from '../src/images/DataImage.JPG';

function AnotherApp() {
  return (
    <>
      
    </>
  )
}


function NewApp() {


  return (
    <div >
      <div id="bg-image"></div>
      <div id="grad"></div>
        <div className="App-header">
          <nav>
            <ul>
              <li><a href="#">Top</a></li>
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
            <div id="rectangle"></div>

            <div className= "cardContainer container-fluid">
              <div className="container mt-3 mainCardContainer">
                
                <div className="card" style={{width:"400px"}}>
                  <img className="card-img-top" src={Tesla_Image} alt="Cat with blue eyes peaking out of cat bed" style={{width:"100%" ,height:"20%"}}></img>
                  <div className="card-body projectCard">
                    <h3 className="card-title" style={{fontWeight:"bold"}}>Tesla Landing Page Recreation</h3>
                    <p className="card-text">Text about the project. Project details and inspiration. Problems solved in project.</p>
                    <a href="#" className="btn btn-primary">View Project</a>
                    <a href="#" className="btn btn-danger" style={{backgroundColor:"purple" ,borderColor:"purple", marginLeft: "10px"}}>View Code</a>
                    <a href="#" className="btn btn-success" style={{marginLeft: "10px"}}>View Original</a>
                  </div>
                </div>
              </div>
              <div className="container mt-3 mainCardContainer">
                
                <div className="card" style={{width:"400px"}}>
                  <img className="card-img-top" src={JJ_Image} alt="Cat with blue eyes peaking out of cat bed" style={{width:"100%" ,height:"20%"}}></img>
                  <div className="card-body projectCard">
                    <h3 className="card-title" style={{fontWeight:"bold"}}>Jimmy Johns Menu Redesign</h3>
                    <p className="card-text">Text about the project. Project details and inspiration. Problems solved in project.</p>
                    <a href="#" className="btn btn-primary">View Project</a>
                    <a href="#" className="btn btn-danger" style={{backgroundColor:"purple" ,borderColor:"purple", marginLeft: "10px"}}>View Code</a>
                    <a href="#" className="btn btn-success" style={{marginLeft: "10px"}}>View Original</a>
                  </div>
                </div>
              </div>
              <div className="container mt-3 mainCardContainer">
                
                <div className="card" style={{width:"400px"}}>
                  <img className="card-img-top" src={API_Image} alt="Cat with blue eyes peaking out of cat bed" style={{width:"100%" ,height:"20%"}}></img>
                  <div className="card-body projectCard">
                    <h3 className="card-title" style={{fontWeight:"bold"}}>API Project</h3>
                    <p className="card-text">Text about the project. Project details and inspiration. Problems solved in project.</p>
                    <a href="#" className="btn btn-primary">View Project</a>
                    <a href="#" className="btn btn-danger" style={{backgroundColor:"purple" ,borderColor:"purple", marginLeft: "10px"}}>View Code</a>
                    <a href="#" className="btn btn-success" style={{marginLeft: "10px"}}>View Original</a>
                  </div>
                </div>
              </div>
              <div className="container mt-3 mainCardContainer">
                
                <div className="card" style={{width:"400px"}}>
                  <img className="card-img-top" src={Data_Image} alt="Cat with blue eyes peaking out of cat bed" style={{width:"100%" ,height:"20%"}}></img>
                  <div className="card-body projectCard">
                    <h3 className="card-title" style={{fontWeight:"bold"}}>Data Driven Project</h3>
                    <p className="card-text">Text about the project. Project details and inspiration. Problems solved in project.</p>
                    <a href="#" className="btn btn-primary">View Project</a>
                    <a href="#" className="btn btn-danger" style={{backgroundColor:"purple" ,borderColor:"purple", marginLeft: "10px"}}>View Code</a>
                    <a href="#" className="btn btn-success" style={{marginLeft: "10px"}}>View Original</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="Skills-Section">
          <h2>Skills</h2>
        </div>
        <div className="Contact-Section">
          <h2>Contact</h2>
        </div>
        <main>
        </main>

        <AnotherApp/>


        
      
    </div>
  );
}

export default NewApp;
