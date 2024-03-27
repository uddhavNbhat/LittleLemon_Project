import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Hero from './Hero';
import Menu from './Menu';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

function Home(){
    return(
        <>
            <Nav />
            <div className='container'>
                <div className='row'>
                    <Hero />
                </div>
                <hr/>
                <div className='row'>
                    <Menu />
                </div>
                <hr/>
                <div className='row'>
                    <Testimonials />
                </div>
                <hr/>
                <div className='row'>
                    <About />
                </div>
                <hr/>
                <div className='row'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home;