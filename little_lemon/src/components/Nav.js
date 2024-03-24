import img1 from './littlelmun.png';
import {Link} from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Nav(){
    return(
            <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-warning'>
                <div className='container-fluid'>
                    <img src={img1} alt='Little Lemon' className='navbar-brand'/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse navbar-nav-scroll' id="navbarScroll">
                        <ul className='navbar-nav justify-content-center w-50 d-flex'>
                            <li className='nav-item p-2'><Link to="reservations" smooth={true} spy = {true} offset={50} duration={100} className="nav-link" href='#'>Home</Link></li>
                            <li className='nav-item p-2'><a className="nav-link" href='#'>About</a></li>
                            <li className='nav-item p-2'><Link to="menu" smooth={true} spy = {true} offset={50} duration={100} className="nav-link" href='#'>Menu</Link></li>
                            <li className='nav-item p-2'><Link to="test" smooth={true} spy = {true} offset={50} duration={100} className="nav-link" href='#'>Testimonials</Link></li>
                            <li className='nav-item p-2'><a className="nav-link" href='#'>Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Nav;