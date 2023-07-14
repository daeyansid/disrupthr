import React from 'react';
import './SectionB.css';
import '../../Components/Main.css';
import '../../Components/Global.css';
import SpanAfter from '../../Assests/spanafter1.svg';
import Image from '../../Assests/image-9@2x.png';



function SectionB() {
  return (
    <div className="mainprimary-2">
      <div className="section1">
      <div className="div8">
      <div className="what-is-disrupthr">What is DisruptHR Sindh?</div>
      <div className="disrupthr-is-your-container">
                <span className="july-302023-container1">
                  <p className="july-302023-disrupthr-sindh">
                    DisruptHR is your event. Come and join us, build and
                    strengthen your network, reconnect, get inspired, and
                    inspire others.
                  </p>
                  <p className="july-302023-disrupthr-sindh">
                    If you’re looking for a true information exchange of great
                    ideas and a platform for learning, sharing and connecting,
                    join us on May 2nd, 2023 at Mile High Station in Denver.
                  </p>
                  <p className="july-302023-disrupthr-sindh">
                    Get inspired by speakers from across the HR community, hear
                    stories about how leaders are pushing boundaries, creating
                    change and connection, forging new pathways, and positively
                    disrupting the industry or workplace.
                  </p>
                  <p className="july-302023-disrupthr-sindh">
                    There will be no chance to get bored, and every opportunity
                    to be inspired! Speakers have 5 minutes each and slides
                    rotate every 15 seconds. Short, sharp and energizing is the
                    theme. No sales pitches allowed in the talks.
                  </p>
                  <p className="july-302023-disrupthr-sindh">
                    We’ll also be joined by some important partners from across
                    the industry. While you’re eating delicious food from a
                    local food truck, and sipping on a well-deserved beverage
                    with new or old friends from the HR community, you can
                    connect and network with vendors who are all there to help
                    you drive your own disruptive agenda.
                  </p>
                  <p className="july-302023-disrupthr-sindh">
                    Any profits made from this event will be donated to a local
                    non-profit who will also be at the event, so please – join
                    us and help to make an impact.
                  </p>
                </span>
              </div>
              <div class="div9">
                <div class="a2">
                  <div class="span">
                       <a href="#" className='view-past-talk'>VIEW PAST TALK</a>
                    <img
                      class="spanafter-icon1"
                      alt=""
                      src={SpanAfter} />
                  </div>
                </div>
              </div>
             
        </div>
        <div>
        <img className="image-9-icon" src={Image} />

              </div>
</div>
</div>

  )
}

export default SectionB
