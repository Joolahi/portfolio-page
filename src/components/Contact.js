import React from "react";
import "./Contact.css";
const Contact = () => {

    return (
        <div className="contact">
            <div className="contact-content">
                <div className="contact-content-left">
                    <h1>Contact</h1>
                    <p>Feel free to contact me for any work or suggestions below</p>
                </div>
                <div className="contact-content-right">
                    <div className="contact-content-right-top">
                        <div className="contact-content-right-top-left">
                            <h1>Phone</h1>
                            <p>123-456-7890</p>
                        </div>
                        <div className="contact-content-right-top-right">
                            <h1>Email</h1>
                            <p>
                                <a href="mailto:
                                ">
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="contact-content-right-bottom">
                        <div className="contact-content-right-bottom-left">
                            <h1>Address</h1>
                            <p>1234 Main St, City, State 12345</p>
                        </div>
                        <div className="contact-content-right-bottom-right">
                            <h1>Social</h1>
                            <p>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.github.com/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;