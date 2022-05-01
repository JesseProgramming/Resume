import CreateSkillsCard from './CreateSkillCard.tsx';
import {IMAGE_SKILLS_FRONTEND, IMAGE_BACKEND, IMAGE_SKILLS_OTHER} from './SkillsImages.js';
import '../stylesheets/SkillsCardStyle.scss';

function DisplayCards(props){
    let ReturnData = [];
        for(let i = 0; i < props.skills.length; i++){ 
            ReturnData.push(
                <CreateSkillsCard
                cardImage={props.skills[i][1]}
                skillName={props.skills[i][0]}/>
            );
        }

    return ReturnData;
}

function SkillsCards() {
    return(
        <div>
            <div className= "container-fluid skillsCardContainer">
            <h2>Skills</h2>
            <h3>Front-end</h3>
                <div className="row">
                    <DisplayCards skills={IMAGE_SKILLS_FRONTEND}/>
                </div>
            </div>
            <div className= "container-fluid skillsCardContainer">
            <h3>Back-end</h3>
                <div className="row">
                    <DisplayCards skills={IMAGE_BACKEND}/>
                </div>
            </div>
            <div className= "container-fluid skillsCardContainer">
            <h3>Other</h3>
                <div className="row">
                    <DisplayCards skills={IMAGE_SKILLS_OTHER}/>
                </div>
            </div>
 
        </div>
    );
}
export default SkillsCards;