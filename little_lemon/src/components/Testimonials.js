import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img2 from './restauranfood.jpg';


function Testimonials(){
    return(
        <div className='test' id='test'>
            <div className='row'>
                <div className='col-12'>
                    <div className='Rate'>
                        <h4>Testimonials</h4>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='opinion'>
                        <h2 style={{fontWeight:'bolder'}}>Read What Others</h2>
                        <h2 className="comment" style={{fontWeight:'bolder'}}>Have To Say</h2>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='ratings'>
                        <div className='rate1'>
                            <div class="logo-placeholder">
                            </div>
                            <div class="text-center">
                                <h3>Review 1</h3>
                                <p>
                                    Lovely staff food and ambience thank you! A well thought out menu - simple and delicious, flavours speak for themselves, LOVED the pork belly. Service was brilliant both nights. All great value also!
                                </p>
                                <div class="star-ratings">
                                    <div class="rating">
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='rate2'>
                            <div class="logo-placeholder">

                            </div>
                            <div class="text-center">
                                <h3>Review 2</h3>
                                <p>
                                    Lovely staff food and ambience thank you! A well thought out menu - simple and delicious, flavours speak for themselves, LOVED the pork belly. Service was brilliant both nights. All great value also!
                                </p>
                                <div class="star-ratings">
                                    <div class="rating">
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='rate3'>
                            <div class="logo-placeholder">
                            </div>
                            <div class="text-center">
                                <h3>Review 3</h3>
                                <p>
                                    Lovely staff food and ambience thank you! A well thought out menu - simple and delicious, flavours speak for themselves, LOVED the pork belly. Service was brilliant both nights. All great value also!
                                </p>
                                <div class="star-ratings">
                                    <div class="rating">
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Testimonials;