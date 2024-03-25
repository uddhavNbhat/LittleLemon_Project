import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img2 from './images/restauranfood.jpg';
import img3 from './images/greeksalad.jpg';
import img4 from './images/bruschetta.jpg';
import img5 from './images/lemon dessert.jpg';


function Menu(){
    const [menuItems, setMenuItems] = useState([
        {
          id: 1,
          name: "Greek Salad",
          description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
          image: img3,
          price: "$ 12.99",
        },
        {
          id: 2,
          name: "Bruschetta",
          description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.",
          image: img4,
          price: "$ 5.99",
        },
        {
          id: 3,
          name: "Lemon Dessert",
          description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
          image: img5,
          price: "$ 5.00",
        }
      ]);
    return(
      <div id='menu'>
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
                <div className="card" style={{width: '20rem'}}>
                  <img className="card-img-top" src={item.image} alt="Card cap" style={{height:'15rem'}}/>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="btn btn-primary" style={{fontFamily:'cursive'}}>{item.price}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Menu;