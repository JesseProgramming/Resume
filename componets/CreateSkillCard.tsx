//props:
//cardImage, imageAlt, skillName
function CreateProjectCard(props) {
    return(
        <div className="container mt-3 col-sm-2 skillCard">
            <img className="card-img-top" src={props.cardImage} alt={props.skillName} style={{width:"80%"}}></img>
                <p>{props.skillName}</p>
        </div>
    );
}

export default CreateProjectCard;