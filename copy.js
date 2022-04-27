import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBrands } from "@fortawesome/free-solid-svg-icons";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

function NewApp() {
  return (
    <div className="NewApp" >
      
      <header className="App-header" id="grad">
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">Projects</a></li>
        <li><a href="contact.asp">Contact</a></li>
      </ul>
        <p>
          Edit <code>src/App.js</code> and save to reload. :D
          NEWWWWWWWW
        </p>
        <FontAwesomeIcon icon="user" />
        <h1>Hello World! :) eat an egg lmao</h1>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-solid fa-trash-can"></i>
        <i class="fa-solid fa-paper-plane"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-solid fa-house"></i>
        <i class="fa-solid fa-circle-info"></i>
        <i class="fa-solid fa-globe"></i>
        <i class="fa-solid fa-arrows-spin"></i>
        <i class="fa-solid fa-calendar"></i>
        <i class="fa-solid fa-file"></i>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-solid fa-paperclip"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-java"></i>
        <i class="fa-brands fa-js-square"></i>
        <i class="fa-brands fa-sass"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-html5"></i>
        <i class="fa-solid fa-code"></i>
        <i class="fa-brands fa-python"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-brands fa-aws"></i>

        
      </header>
    </div>
  );
}

export default NewApp;
