import catPicture from '../src/images/kitten.png';

function AnotherApp() {
  return (
    <>
      
    </>
  )
}


function NewApp() {


  return (
    <div >
        <div className="App-header" id="grad">
          <nav>
            <ul>
              <li><a href="default.asp">Home</a></li>
              <li><a href="news.asp">Projects</a></li>
              <li><a href="contact.asp">Contact</a></li>
            </ul>
          </nav>
        
          <header className = "mainHeader">
            <div className="header-content">
              <h1>Jesse James Clem</h1>
              <p>Front End Web Developer</p>
            </div>
            <div id="rectangle"></div>

            <div className="container mt-3 mainCardContainer">
              <h2 >Project Name</h2>
              <div className="card" style={{width:"400px"}}>
                <img className="card-img-top" src={catPicture} alt="Card image" style={{width:"100%"}}></img>
                <div className="card-body projectCard">
                  <h4 className="card-title" style={{fontWeight:"bold"}}>Project Name</h4>
                  <p className="card-text">Text about the project. Project details and inspiration. Problems solved in project.</p>
                  <a href="#" className="btn btn-primary">View Code</a>
                  <a href="#" className="btn btn-danger" style={{backgroundColor:"purple" ,borderColor:"purple", marginLeft: "10px"}}>See Code</a>
                </div>
               </div>
            </div>
          </header>
        </div>
        <main>
        </main>
        <AnotherApp/>


        
      
    </div>
  );
}

export default NewApp;
