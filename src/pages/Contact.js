import React from "react";
import "../style/contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="row full-height contact-content">
            <div className="contact-box">
                <a target="_blank" id="github" href="https://github.com/guga1109"><FontAwesomeIcon
                    icon={faGithubSquare}/></a>
                <a target="_blank" id="linkedin"
                   href="https://www.linkedin.com/in/gustavo-bevilacqua-7130aa186/"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a target="_blank" id="email" href="mailto:gustavocbevilacqua@gmail.com"><FontAwesomeIcon
                    icon={faEnvelopeSquare}/></a>
            </div>
        </div>
    );
};

export default Contact;