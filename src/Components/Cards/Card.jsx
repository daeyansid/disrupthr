import React from 'react';
import './Card.css';
import '../../Components/Main.css';
import '../../Components/Global.css';
import SpanAfter from '../../Assests/spanafter4.svg';
import Fig1 from '../../Assests/fig1.png';
import Fig2 from '../../Assests/fig2.png';
import Fig3 from '../../Assests/fig3.png';


function Card() {
  return (
    <div className='mainprimary-6'>
    <div className="aside">
    <div className="div22">
      <div className="h23">
        <div className="latest-insights">Latest insights</div>
      </div>
      <div className="div23">
        <div className="a7">
          <div className="span6">
            <a href="#" className="buy-a-ticket">View all insights</a>
            <img
              className="spanafter-icon4" style={{cursor:'pointer'}}
              alt=""
              src={SpanAfter}
            />
          </div>
        </div>
      </div>
      <div className="div24">
        <div className="div25">
            
          <div class="a8">
            <img
              className="figurelatest-insights-218357-icon"
              alt=""
              src={Fig1}
            />

          <div className="div28">
              <b className="john-cm-cunningham"
                >John C.M. Cunningham: My TakeAways From DisruptHR Toronto
                3.0</b
              >
              <div class="last-thursday-december">
                Last Thursday, December 1st, I attended a DisruptHR event
                for the first time. My motivation going in was simple –
                the HR field is currently exploding with change, and I
                want to be involved in any way that I can.
              </div>
              <p className="read-more-">
                    <span>
                      <span> -</span>
                    </span>
                    <span>
                      <a href='#' className="read-more-1">READ MORE-</a>
                    </span>
                  </p>
                  <p className="july-302023-disrupthr-sindh">
                    <span>
                      <span> </span>
                    </span>
                  </p>
            </div>
            
          </div>

          <div className="a9">
            <img
              className="figurelatest-insights-218357-icon"
              alt=""
              src={Fig2}
            />

<div className="div28">
              <b className="john-cm-cunningham"
                >John C.M. Cunningham: My TakeAways From DisruptHR Toronto
                3.0</b
              >
              <div class="last-thursday-december">
                Last Thursday, December 1st, I attended a DisruptHR event
                for the first time. My motivation going in was simple –
                the HR field is currently exploding with change, and I
                want to be involved in any way that I can.
              </div>
              <p className="read-more-">
                    <span>
                      <span> -</span>
                    </span>
                    <span>
                      <a href='#' className="read-more-1">READ MORE-</a>
                    </span>
                  </p>
                  <p className="july-302023-disrupthr-sindh">
                    <span>
                      <span> </span>
                    </span>
                  </p>
            </div>
          </div>
          
          <div className="a10">
            <img
              className="figurelatest-insights-218357-icon"
              alt=""
              src={Fig3}
            />

            <div className="div28">
              <b className="john-cm-cunningham"
                >John C.M. Cunningham: My TakeAways From DisruptHR Toronto
                3.0</b
              >
              <div class="last-thursday-december">
                Last Thursday, December 1st, I attended a DisruptHR event
                for the first time. My motivation going in was simple –
                the HR field is currently exploding with change, and I
                want to be involved in any way that I can.
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Card
