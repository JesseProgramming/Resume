//If data is entered for the last button, it will display. It won't display if it is not needed.
function ShowLastButton(props){
    if(props.isDisplayed && !props.isTrello){
        return(<a href={props.viewOriginalLink} target="_blank" rel="noreferrer" className="btn">View Original</a>);
    }
    else if(props.isDisplayed && props.isTrello){
        return(<a href={props.viewOriginalLink} target="_blank" rel="noreferrer" className="btn trello">View Trello</a>);
    }
}

function DisplayViewProjectButton(props){
    if(props.isDisplayed){
        return(<a href={props.viewProjectLink} target="_blank" className="btn">View Project</a>);
    }
    else{
        return;
    }
}

function DisplayViewCodeButton(props){
    if(props.isDisplayed){
        return(<a href={props.viewCodeLink} target="_blank" className="btn btnTwo">View Code</a>);
    }
    else{
        return;
    }
}

//props:
//cardImage, imageAlt, headerText, projectDescription, viewProjectLink, viewCodeLink, viewOriginalLink
function CreateProjectCard(props) {
    return(
        <div className="container mt-3 col-sm-2 myCard">
            <img className="card-img-top" src={props.cardImage} alt={props.imageAlt} style={{width:"100%"}}></img>
            <div className="card-body">
                <h3>{props.headerText}</h3>
                <p>{props.projectDescription}</p>
            </div>
            <div className="CardButtons">

                    <DisplayViewProjectButton viewProjectLink = {props.viewProjectLink} isDisplayed= {props.viewProjectLink === "#" ? false : true}/>
                    <DisplayViewCodeButton viewCodeLink = {props.viewCodeLink} isDisplayed= {props.viewCodeLink === "#" ? false : true}/>
                    <ShowLastButton viewOriginalLink = {props.viewOriginalLink} isDisplayed= {props.viewOriginalLink === "" ? false : true} isTrello = {props.isTrello} />
            </div>
        </div>
    );
}

export default CreateProjectCard;