import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from './components/Nav';
import Reservations from './components/Reservations';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
function App() {
  return(
  <>
    <Nav/>
    <main className='container'>
      <div className='row'>
        <Reservations/>
      </div>
      <hr/>
      <div className='row'>
        <Menu/>
      </div>
      <hr/>
      <div className='row'>
        <Testimonials/>
      </div>
    </main>
  </>
  )
}

export default App;
