import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axiosInstance from './utils/axiosInstance';
import img1 from './images/littlelmun.png';

function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axiosInstance.get('/auth/userinfo')
                .then(response => {
                    setIsLoggedIn(true);
                    setUsername(response.data.username);
                })
                .catch(error => {
                    console.error('Error fetching user info:', error);
                });
        }
    }, []);

    const handleSignOut = () => {
        sessionStorage.removeItem('token');
        setIsLoggedIn(false);
        setUsername('');
        navigate('/');
    };

    return (
        <>
            <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-warning'>
                <div className='container-fluid'>
                    <img src={img1} alt='Little Lemon' className='navbar-brand' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse navbar-nav-scroll' id="navbarScroll">
                        <ul className='navbar-nav justify-content-center w-100 d-flex'>
                            <li className='nav-item p-2'><RouterLink to="/" className="nav-link">Home</RouterLink></li>
                            <li className='nav-item p-2'><Link to="about" smooth={true} spy={true} offset={50} duration={100} className="nav-link">About</Link></li>
                            <li className='nav-item p-2'><Link to="menu" smooth={true} spy={true} offset={50} duration={100} className="nav-link">Menu</Link></li>
                            <li className='nav-item p-2'><Link to="test" smooth={true} spy={true} offset={50} duration={100} className="nav-link">Testimonials</Link></li>
                            <li className='nav-item p-2'><RouterLink to="/booking" className="nav-link">Reservations</RouterLink></li>
                            <li className='nav-item p-2'><RouterLink to="/availablebookings" className='nav-link'>Current Booking</RouterLink></li>
                            {isLoggedIn ? (
                                <>
                                    <li className='nav-item'>
                                        <button onClick={handleSignOut} className='btn btn-link nav-link'>Sign Out</button>
                                    </li>
                                    <li className='nav-item p-2' style={{marginLeft: '400px'}}>
                                        <span className='nav-link'>Welcome, {username}</span>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className='nav-item p-2'><RouterLink to="/signup" className='nav-link'>Sign Up</RouterLink></li>
                                    <li className='nav-item p-2'><RouterLink to="/signin" className='nav-link'>Sign In</RouterLink></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
