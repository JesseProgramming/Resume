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
                viewProjectLink="projects/TeslaLanding/index.html"
                viewCodeLink="https://github.com/JessePython/Tesla-Landing-Page"
                isTrello={false}
                viewOriginalLink="https://www.tesla.com/"/>
            <CreateProjectCard
                cardImage={require('../images/DailyDaydots.png').default}
                imageAlt="API graphic cyan and black"
                headerText="Day Dots Reference"
                projectDescription="A tool designed as a reference chart for use in the restaurant industry to help take out human
                error on mislabeling food products, and thus helping prevent food waste and health hazards.
                This has been deployed for use in multiple restaurants and has garnered positive feedback and
                improved workplace efficiency."
                viewProjectLink="projects/DayDots/index.html"
                viewCodeLink="https://github.com/JessePython/DayDots"
                viewOriginalLink=""/>
            <CreateProjectCard
                cardImage={require('../images/resume_site.JPG').default}
                imageAlt="API graphic cyan and black"
                headerText="Resume Site"
                projectDescription="My personal online resume site. Built using scalable code in React so adding new content is simple and all handled in one respective component."
                viewProjectLink="#"
                viewCodeLink="https://github.com/JessePython/Resume"
                viewOriginalLink=""/>
            <CreateProjectCard
                cardImage={require('../images/newsletter.png').default}
                imageAlt="Multiple charts glowing graphic"
                headerText="Newsletter Site"
                projectDescription="Landing page built in pure HTML and CSS. Meant as a landing page for a small business, calling on people to subscribe."
                viewProjectLink="projects/NewsLetter/index.html"
                viewCodeLink="https://github.com/JesseProgramming/Dark-Theme-Site"
                viewOriginalLink=""/>
                </div>
                
            </div>
        </div>
    );
}

export default ProjectCards;