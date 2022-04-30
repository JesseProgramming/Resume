import Tesla_Image from '../images/TeslaPage.JPG';
import JJ_Image from '../images/JimmyJohnsPage.JPG';
import API_Image from '../images/api-image.png';
import Data_Image from '../images/DataImage.JPG';
import CreateProjectCard from './CreateProjectCard.tsx';
import '../stylesheets/CardTesting.scss';

function ProjectCards() {
    return(
        <div>
            <div className= "container-fluid cardContainer">
            <h2>Projects</h2>
              <div className="row">
            <CreateProjectCard
                cardImage={Tesla_Image}
                imageAlt="Tesla Landing Page View"
                headerText="Tesla Landing Page Recreation"
                projectDescription="Text about the project. Project details and inspiration. Problems solved in project."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink="https://www.tesla.com/"/>
            <CreateProjectCard
                cardImage={JJ_Image}
                imageAlt="Jimmy Johns Menu Landing Page View"
                headerText="Jimmy Johns Menu Redesign"
                projectDescription="Text about the project. Project details and inspiration. Problems solved in project."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink="https://www.jimmyjohns.com/menu/"/>
            <CreateProjectCard
                cardImage={API_Image}
                imageAlt="API graphic cyan and black"
                headerText="API Project"
                projectDescription="Text about the project. Project details and inspiration. Problems solved in project."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink=""/>
            <CreateProjectCard
                cardImage={Data_Image}
                imageAlt="Coding graphic in blues, blacks, and purples"
                headerText="Data Driven Project"
                projectDescription="Text about the project. Project details and inspiration. Problems solved in project."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink=""/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;