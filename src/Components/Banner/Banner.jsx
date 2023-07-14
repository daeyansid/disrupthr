import React from 'react';
import './Banner.css';
import '../../Components/Main.css';
import '../../Components/Global.css';
import SpanAfter from '../../Assests/spanafter3.svg';
import Image10 from '../../Assests/image 10.png';


function Banner() {
  return (
    <div className='mainprimary-5'> 
    <div className="section4">
    <div className="div19">
      <div className="div20">
        <div className="is-someone-spying">
          Is someone spying on your Event?
        </div>
        <div className="find-out-with">Find out with Certo</div>
      </div>
      <div className="div21">
        <div className="a5">
          <div className="span">
            <a href="#" className="buy-a-ticket" >Get Certo for event</a>
            {/* <div className="buy-a-ticket">Get Certo for event</div> */}
            <img
              className="spanafter-icon3"
              alt=""
              src={SpanAfter}
            />
          </div>
        </div>
        <div className="a6">
          <a href="#" className='become-a-sponsor'>Get Certo for Ticket</a>
        </div>
      </div>
      <div className='image10'>
      <img src={Image10} alt="" />
    </div>
    </div>
   
  </div>
  </div>

  )
}

export default Banner
