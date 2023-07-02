import { React } from "react";
import { ArrowsAngleContract } from 'react-bootstrap-icons';
import { GraphUpArrow } from 'react-bootstrap-icons';


const Footer = () => {
    return (
        <div className="container">
            <div className="row row-cols-2 mw-100">
                <div className="col  text-center">
                    <span className="fs-1" style={{ color: "#343a40" }}><ArrowsAngleContract /></span>
                    <h2 className="fs-1 fw-bold" style={{ color: "#343a40" }}>Shorten Links</h2>
                    Shortener makes long links look cleaner and easier to share! Add your own Custom Domains to personalize your brand!
                </div>
                <div className="col  text-center">
                    <span className="fs-1" style={{ color: "#343a40" }}><GraphUpArrow /></span>
                    <h2 className="fs-1 fw-bold" style={{ color: "#343a40" }}>Stats</h2>
                    Shortener makes long links look cleaner and easier to share! Add your own Custom Domains to personalize your brand!
                </div>
            </div>
        </div>
    )
};

export default Footer;

