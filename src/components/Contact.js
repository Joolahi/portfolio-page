import React from "react";
import "./Contact.css";
import { Card } from "react-bootstrap";



const Contact = () => {
    return (
        <div className="contact-container">
            <video autoPlay loop muted className="video-background">
                <source src={`${process.env.PUBLIC_URL}/contact_background_video.mp4`} type="video/mp4" />
            </video>
            
            <div className="video-source">
                Video courtesy of Pressmaster from Pixels.com
            </div>
        </div>
    );
}
export default Contact;