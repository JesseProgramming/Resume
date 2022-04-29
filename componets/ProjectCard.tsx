//If data is entered for the last button, it will display. It won't display if it is not needed.
function ShowLastButton(props){
    if(props.isDisplayed){
        return(
            <a href={props.viewOriginalLink} target="_blank" className="btn btn-success" style={{marginLeft: "10px"}}>View Original</a>
    );}
}
//props:
//cardImage, imageAlt, headerText, projectDescription, viewProjectLink, viewCodeLink, viewOriginalLink
function ProjectCard(props) {
    return(
        <div className="container mt-3 mainCardContainer">
            <div className="card" style={{width:"400px"}}>
                <img className="card-img-top" src={props.cardImage} alt={props.imageAlt} style={{width:"100%" ,height:"7.5em"}}></img>
                <div className="card-body projectCard">
                    <h3 className="card-title" style={{fontWeight:"bold"}}>{props.headerText}</h3>
                    <p>{props.projectDescription}</p>
                    <div className="buttonContainer">
                        <a href={props.viewProjectLink} className="btn btn-primary">View Project</a>
                        <a href={props.viewCodeLink} className="btn btn-danger" style={{backgroundColor:"purple" ,borderColor:"purple", marginLeft: "10px"}}>View Code</a>
                        <ShowLastButton viewOriginalLink = {props.viewOriginalLink} isDisplayed= {props.viewOriginalLink === "" ? false : true}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;