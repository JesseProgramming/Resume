import Tesla_Image from '../images/TeslaPage.JPG';
import JJ_Image from '../images/JimmyJohnsPage.JPG';
import API_Image from '../images/api-image.png';
import Data_Image from '../images/chartimg.jpg';
import CreateProjectCard from './CreateProjectCard.tsx';
import '../stylesheets/CardTesting.scss';

function ProjectCards() {
    return(
        <div>
            <div className= "container-fluid projectCardContainer" id="Projects">
            <h2>Projects</h2>
              <div className="row">
            <CreateProjectCard
                cardImage={Tesla_Image}
                imageAlt="Tesla Landing Page View"
                headerText="Tesla Landing Page Recreation"
                projectDescription="A clone project of Tesla's landing page."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink="https://www.tesla.com/"/>
            <CreateProjectCard
                cardImage={JJ_Image}
                imageAlt="Jimmy Johns Menu Landing Page View"
                headerText="Jimmy Johns Menu Redesign"
                projectDescription="The current Jimmy Johns menu site is unappealing to look at, and a nightmare to navigate. I've put together a revamp of the site making it easy to understand and use."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink="https://www.jimmyjohns.com/menu/"/>
            <CreateProjectCard
                cardImage={Data_Image}
                imageAlt="Multiple charts glowing graphic"
                headerText="Cookie Sales Tracker"
                projectDescription="Displays data and graphs tracking the sales of a cookie company."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink=""/>
            <CreateProjectCard
                cardImage={API_Image}
                imageAlt="API graphic cyan and black"
                headerText="API Project"
                projectDescription="Under development."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink=""/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;