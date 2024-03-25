import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import aboutimg1 from './images/Mario and Adrian A.jpg';
import aboutimg2 from './images/Mario and Adrian b.jpg';

function About(){
    return(
        <div className="about-container" id='about'>
            <div className="row">
            <div className="col-md-6 about-content">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                Little Lemon is owned by two Italian brothers, Mario and
                Adrian, who moved to the United States to pursue their
                shared dream of owning a restaurant.
                </p>
                <p>
                To craft the menu, Mario relies on family recipes and
                his experience as a chef in Italy. Adrian does all the
                marketing for the restaurant and led the effort to
                expand the menu beyond classic Italian to incorporate
                additional cuisines from the Mediterranean region.
                </p>
            </div>

            <div className="col-md-6 about-images">
                <div className="image-container">
                <img src={aboutimg1}alt="Image 1"className="img-fluid img1"/>
                <img src={aboutimg2} alt="Image 2" className="img-fluid img2"/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;