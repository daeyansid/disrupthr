import React from 'react';
import '../../Components/Main.css';
import '../../Components/Global.css';
import './Help.css'
import SpanAfter from '../../Assests/spanafter2.svg';

function Help() {
  return (
    <div className='mainprimary-4'>
        
        <div className="section3">
          <div className="div11">
            <div className="div12">
              <div class="h21">
                <div class="read-our-story">Read our story</div>
              </div>
              <div class="div13">
                <div class="find-out-why">
                  Find out why thousands trust Certo to secure their mobile
                  world.
                </div>
              </div>
              <div class="div14">
                <div class="a3">
                  <div class="span4">
                    <a href="#" className='about-us'>About us</a>
                    <img
                      class="spanafter-icon2"
                      alt=""
                      src={SpanAfter}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="div15">
              <div className="h22">
                <h1 className='read-our-story'>Help Center</h1>
              </div>
              <div className="div16">
                <h3 className="help-topics-getting">
                Help topics, getting started guides and FAQs.
                </h3>
              </div>
              <div className="div17">
                <div className="div18">
                <a href="#" className='a4'>
                    Visit help center
                      </a>
                </div>
              </div>
            </div>

          </div>
        </div>

    </div>
  )
}

export default Help
