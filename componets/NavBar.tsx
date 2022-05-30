import '../stylesheets/NavBar.scss';
function NavBar(){
    return(
        <div id="navContainer">
            <nav>
            <div id="grad2"></div>
            <ul>
                <li><a href="#grad">Top</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Skills-Section">Skills</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Resume"><img src={require('../images/paper-file-text.209x256.png').default}/>Resume</a></li>
            </ul>
            </nav>
        </div>
    )
}

export default NavBar;