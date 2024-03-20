import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img2 from './restauranfood.jpg';
import img3 from './greeksalad.jpg';
import img4 from './bruschetta.jpg';
import img5 from './lemon dessert.jpg';


function Menu(){
    const [menuItems, setMenuItems] = useState([
        {
          id: 1,
          name: "Special 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: img3,
        },
        {
          id: 2,
          name: "Special 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: img4,
        },
        {
          id: 3,
          name: "Special 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: img5,
        }
      ]);
    return(
      <>
        <div className='row'>
          <div className='col-6'>
            <h1>Specials</h1>
          </div>
          <div className='col-6 order'>
            <a href='#' className='btn btn-warning'>Online Menu</a>
          </div>
        </div>
        <div className="menu-container">
          <div className="menu-grid">
            {menuItems.map(item => (
              <div key={item.id} className="menu-item">
                <div class="card" style={{width: '20rem'}}>
                  <img class="card-img-top" src={item.image} alt="Card cap"/>
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default Menu;