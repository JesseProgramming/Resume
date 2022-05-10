import Tesla_Image from '../images/TeslaPage.JPG';
import JJ_Image from '../images/JimmyJohnsPage.JPG';
import API_Image from '../images/api-image.png';
import Data_Image from '../images/chartimg.jpg';
import Resume_Image from '../images/resume_site.JPG';
import DayDots_Image from '../images/DayDotExample.PNG';
import Cookie_Image from '../images/Cookie-Clicker-Cheat-Codes.jpg';
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
                cardImage={Data_Image}
                imageAlt="Multiple charts glowing graphic"
                headerText="Cookie Sales Tracker"
                projectDescription="Displays data and graphs tracking the sales of a cookie company. This app makes strong use of React, Redux, D3, and JSON data."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink=""/>
            <CreateProjectCard
                cardImage={DayDots_Image}
                imageAlt="API graphic cyan and black"
                headerText="Day Dots Reference"
                projectDescription="A tool built for, and used in the restaurant industry. This app makes it easy to print out a sheet to reference what day a food item expires
                 and helps prevent mistakes. Add or delete any days you don't need."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink=""/>
                        <CreateProjectCard
                cardImage={Resume_Image}
                imageAlt="API graphic cyan and black"
                headerText="Resume Site"
                projectDescription="This site was created with highly optomized React code, and has achieved a high Google Lighthouse score."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink=""/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;