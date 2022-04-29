import Tesla_Image from '../src/images/TeslaPage.JPG';
import JJ_Image from '../src/images/JimmyJohnsPage.JPG';
import API_Image from '../src/images/api-image.png';
import Data_Image from '../src/images/DataImage.JPG';
import ProjectCard from './componets/ProjectCard.tsx';
import './stylesheets/CardTesting.scss';

function CardTesting() {
    return(
        <div>
            <div className= "cardContainer container-fluid">
              <ProjectCard
                cardImage={Tesla_Image}
                imageAlt="Tesla Landing Page View"
                headerText="Tesla Landing Page Recreation"
                projectDescription="Text about the project. Project details and inspiration. Problems solved in project."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink="https://www.tesla.com/"/>
            <ProjectCard
                cardImage={JJ_Image}
                imageAlt="Jimmy Johns Menu Landing Page View"
                headerText="Jimmy Johns Menu Redesign"
                projectDescription="Text about the project. Project details and inspiration. Problems solved in project."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink="https://www.jimmyjohns.com/menu/"/>
            <ProjectCard
                cardImage={API_Image}
                imageAlt="API graphic cyan and black"
                headerText="API Project"
                projectDescription="Text about the project. Project details and inspiration. Problems solved in project."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink=""/>
            <ProjectCard
                cardImage={Data_Image}
                imageAlt="Coding graphic in blues, blacks, and purples"
                headerText="Data Driven Project"
                projectDescription="Text about the project. Project details and inspiration. Problems solved in project."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink=""/>
            </div>
        </div>
    );
}

export default CardTesting;