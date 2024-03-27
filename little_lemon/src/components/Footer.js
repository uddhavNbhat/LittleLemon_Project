import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from "react-scroll";
import img6 from './images/restaurant.jpg';
function Footer(){
    return(
        <footer className="container-fluid bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={img6} alt="Logo" className="img-fluid" />
                    </div>
                    <div className="col-md-3">
                        <h5>Little Lempn</h5>
                        <ul className="list-unstyled">
                            <li><Link to='about' href="#" style={{textDecoration:'none'}}>About</Link></li>
                            <li><Link to="test" href="#" style={{textDecoration:'none'}}>Testimonials</Link></li>
                            <li><Link to="menu" href="#" style={{textDecoration:'none'}}>Menu</Link></li>
                            <li><Link to="Home" href="#" style={{textDecoration:'none'}}>Reservation</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Address</h5>
                        <p>You may also want to visit us:</p>
                        <p>
                            Little Lemon <br />
                            331 E Chicago <br />
                            LaSalle Street Chicago, Illinois 60602 <br />
                            USA
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" style={{textDecoration:'none'}}><FaFacebook /> Facebook</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}><FaInstagram /> Instagram</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}><FaTwitter /> Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
