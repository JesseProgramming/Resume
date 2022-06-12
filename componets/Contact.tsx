import '../stylesheets/Contact.scss';

function Contact() {
     return(
         <div id="contact-card">
             <h2>Contact</h2>
             <h3>Let's get in touch!</h3>
             <div id="contact-content">
             <a><img src={require('../images/person-circle.256x256.png').default}/> Jesse James Clem</a>
             <a href = "mailto: JesseClemProgramming@gmail.com" target="_blank"><img id = "email-image" src={require('../images/email.256x175.png').default}/> JesseClemProgramming@gmail.com</a>
             <a><img src={require('../images/phone.255x256.png').default}/> 1 (360) 701-2737</a>
             
             
             </div>
             <div id="social-links">
             <a href = "#" target="_blank"><img src={require('../images/social-linkedin.256x256.png').default}/>Linkedin</a>
                <img src={require('../images/github.256x250.png').default}/><a href = "#" target="_blank">Github</a>
             </div>
         </div>
     );
}

export default Contact;