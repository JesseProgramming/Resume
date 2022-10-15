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
                cardImage={require('../images/adminDashboard.png').default}
                imageAlt="Dashboard display with multiple widgets and charts"
                headerText="Admin Dashboard"
                projectDescription="A complex multi-page dashboard app to track product sales. Charts were created using Charts.js. Light theme and dark theme available."
                viewProjectLink="projects/AdminDashboard/index.html"
                viewCodeLink="https://github.com/JesseProgramming/AdminDashboard"
                viewOriginalLink=""/>
            <CreateProjectCard
                cardImage={require('../images/shot1.PNG').default}
                imageAlt="Screenshot of GUI in the day dots app"
                headerText="Day Dots Reference"
                projectDescription="A tool designed as a reference chart for use in the restaurant industry to help take out human
                error on mislabeling food products, and thus helping prevent food waste and health hazards.
                This has been deployed for use in multiple restaurants and has garnered positive feedback and
                improved workplace efficiency."
                viewProjectLink="projects/DayDots/index.html"
                viewCodeLink="https://github.com/JesseProgramming/DayDotsv4"
                viewOriginalLink=""/>
                
            <CreateProjectCard
                cardImage={require('../images/resume_site.JPG').default}
                imageAlt="Graphic from top of current resume site"
                headerText="Resume Site"
                projectDescription="My personal online resume site. Built using scalable code in React so adding new content is simple and all handled in one respective component."
                viewProjectLink="#"
                viewCodeLink="https://github.com/JessePython/Resume"
                viewOriginalLink=""/>
            <CreateProjectCard
                cardImage={require('../images/preview.png').default}
                imageAlt="Graphic from top of current resume site"
                headerText="Ecommerce Site"
                projectDescription="Coming soon."
                viewProjectLink="#"
                viewCodeLink="#"
                viewOriginalLink=""/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;