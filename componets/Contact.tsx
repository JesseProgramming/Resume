import '../stylesheets/Contact.scss';

function Contact() {
     return(
         <div id="contact-card">
             <h2>Contact</h2>
             <h3>Let's get in touch!</h3>
             <p>Jesse Clem</p>
             <p>jessecprogramming@gmail.com</p>
             <p>1-360-701-2737</p>
             <ul>
                 <li><img src={require("../images/email.svg").default} alt="linkedin"></img></li>
                 <li>github</li>
             </ul>
         </div>
     );
}

export default Contact;