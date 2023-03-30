import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="scroll" onClick={handleScrollTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
                <div className="footer-content-mid">
                    <p><FontAwesomeIcon icon={faCopyright} /> 2023 All Rights Reserved</p>
                </div>
            </div>
        </footer >
    );
}
export default Footer;