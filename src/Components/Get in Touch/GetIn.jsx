import React from 'react';
import '../../Components/Main.css';
import '../../Components/Global.css';
import './GetIn.css';
import Qrcode from '../../Assests/image 11.png';
import Frame835 from '../../Assests/frame-835.svg';
import Frame833 from '../../Assests/frame-833.svg';
import Frame831 from '../../Assests/frame-831.svg';
import Layer11 from '../../Assests/layer-11.svg';


function GetIn() {
  return (
    <div className="mainprimary-3">
    <div className="section2">
      <div className="frame-parent">
        <div className="frame-group">
          <div className="get-in-touch-parent">
            <b className="get-in-touch-container">
              <span>Get in </span>
              <span className="touch">Touch</span>
            </b>
            <div className="enim-tempor-eget">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing.
              Eu leo molestie vel, ornare non id blandit netus.
            </div>
          </div>

          <form action='post' className="text-field-parent">
          <div>
            <span><input className='text-field' placeholder='Name' required="" type="text" name="" id="" /></span>       
            </div>
            <div>
            <span><input className='text-field' placeholder='Email' required="" type="email" name="" id="" /></span>       
            </div>
            <div>
            <span><input className='text-field' placeholder='Phone Number' required="" type="number" name="" id="" /></span>       
            </div>
            <div className="dropdown">
            <label for="fine">How did you find us?</label>
              <select className='select-1' name="find" id="find">
                  <option value="volvo">Friends</option>
                  <option value="saab">Social Media</option>
                  <option value="opel">Others</option>
              </select>

            </div>

            <button type='submit' className='button send'>
             <a href="#" className='link-1'>Send</a> 
            </button>
          </form>

        </div>
        <div className="frame-container">
          <div className="frame-div">
            <img className="frame-child" alt="" src={Frame831} />
  
            <div className="phone-03-5432-container">
              <p className="phone">PHONE</p>
              <p className="p">03 5432 1234</p>
            </div>
          </div>
          <div className="frame-div">
            <img className="frame-item" alt="" src={Frame835} />
  
            <div className="phone-03-5432-container">
              <p className="phone">FAX</p>
              <p className="p">03 5432 1234</p>
            </div>
          </div>
          <div className="frame-div">
            <img className="frame-item" alt="" src={Frame833} />
  
            <div className="phone-03-5432-container">
              <p className="phone">EMAIL</p>
              <p className="p">info@marcc.com.au</p>
            </div>
          </div>
        </div>
      </div>

      <div>
      <img className="layer-1-icon1" alt="" src={Layer11} />
      <div className="div10 qrcode">
        <img src={Qrcode} alt="" />
      </div>
      </div>
  
      
    </div>
  </div>
  
  )
}

export default GetIn
