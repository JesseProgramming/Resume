//If data is entered for the last button, it will display. It won't display if it is not needed.
function ShowLastButton(props){
    if(props.isDisplayed && !props.isTrello){
        return(<a href={props.viewOriginalLink} target="_blank" rel="noreferrer" className="btn">View Original</a>);
    }
    else if(props.isDisplayed && props.isTrello){
        return(<a href={props.viewOriginalLink} target="_blank" rel="noreferrer" className="btn trello">View Trello</a>);
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
                    <a href={props.viewProjectLink} target="_blank" className="btn">View Project</a>
                    <a href={props.viewCodeLink} target="_blank" className="btn">View Code</a>
                    <ShowLastButton viewOriginalLink = {props.viewOriginalLink} isDisplayed= {props.viewOriginalLink === "" ? false : true} isTrello = {props.isTrello} />
            </div>
        </div>
    );
}

export default CreateProjectCard;