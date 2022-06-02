// @ts-ignore
import CreateProjectCard from './CreateProjectCard.tsx';
import '../stylesheets/CardTesting.scss';

function ProjectCards() {
    return(
        <div>
            <div className= "container-fluid projectCardContainer" id="Projects">
            <h2>Projects</h2>
              <div className="row">
            <CreateProjectCard
                cardImage={require('../images/TeslaPage.JPG').default}
                imageAlt="Tesla Landing Page View"
                headerText="Tesla Landing Page Recreation"
                projectDescription="A clone project of Tesla's landing page. I've managed to fix several bugs found on the live Tesla site, and managed to score higher rankings in performance and SEO using Google Lighthouse."
                viewProjectLink="../src/projects/TeslaLanding/index.html"
                viewCodeLink="https://github.com/JessePython/Tesla-Landing-Page"
                isTrello={false}
                viewOriginalLink="https://www.tesla.com/"/>
            <CreateProjectCard
                cardImage={require('../images/chartimg.jpg').default}
                imageAlt="Multiple charts glowing graphic"
                headerText="Newsletter Site - In Development"
                projectDescription="Landing page built in pure HTML and CSS. Meant as a landing page for a small business, calling on people to subscribe."
                viewProjectLink="#"
                viewCodeLink="#"
                isTrello={true}
                viewOriginalLink="https://trello.com/b/QTYL5TWN/current-todo"/>
            <CreateProjectCard
                cardImage={require('../images/DayDotExample.PNG').default}
                imageAlt="API graphic cyan and black"
                headerText="Day Dots Reference"
                projectDescription="A tool designed as a reference chart for those in the restaurant industry to help take out human error on mislabeling food products, and thus helping prevent food waste and health hazards."
                viewProjectLink="../src/projects/DayDots/index.html"
                viewCodeLink="https://github.com/JessePython/DayDots"
                viewOriginalLink=""/>
                        <CreateProjectCard
                cardImage={require('../images/resume_site.JPG').default}
                imageAlt="API graphic cyan and black"
                headerText="Resume Site"
                projectDescription="This site was created with highly optimized React code, and has achieved a high Google Lighthouse score."
                viewProjectLink=""
                viewCodeLink="https://github.com/JessePython/Resume"
                viewOriginalLink=""/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;