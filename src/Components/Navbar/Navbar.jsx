import React from 'react';
import '../../Components/Main.css';
import '../../Components/Global.css';
import './Navbar.css';
import n_logo from '../../Assests/image-52@2x.png';

const NavAfter = () => {
  return (
    <div class="navafter"> 
         <div className="div-wrapper">
        <div className="div37">
          {/* <div className="divbefore"></div> */}
          <img className="image-5-icon2" alt="" src={n_logo} />

          <div className="div38">
              <ul className='ulmenu-main'>
                <li><a className='li-1' href="#">Home</a></li>
                <li><a className='li-1' href="#">Press</a></li>
                <li><a className='li-1' href="#">Speaker</a></li>
                <li><a className='li-1' href="#">Help</a></li>
                <li><a className='li-1' href="#">Sponsership</a></li>
              </ul>
              <button className='sign-in'><a href="#" style={{textDecoration:'none',color:'white'}}> Sign in</a></button>  
          </div>
        </div>
      </div>
     </div>
  );
};

export default NavAfter;
