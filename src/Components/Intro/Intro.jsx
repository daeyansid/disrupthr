import React from "react";
import "./Intro.css";
// import "../../Components/Global.css";
// import "../../Components/Main.css";
import bg_circle from "../../Assests/bgcirclesvg.svg";
import span_after from "../../Assests/spanafter.svg";


function Intro() {
  return (
    <div className="Intro">
      <div className="header">
        <div>
        <img className="bg-circlesvg-icon" alt="" src={bg_circle} />
        </div>
        <div className="div" />
        <div className="div1">
          <div className="div2">
            <div className="intro-1"> DisruptHR Sindh 16.0 </div>
            <div className="intro-2">
              <span className="intro-span-1" style={{}}>
                July 30, 2023 | DisruptHR Sindh Co
                <br />
              </span>
              <span className="intro-span-1" style={{ fontWeight: "400",marginLeft:'21px' }}>
                connect with other DisruptHR!
              </span>
            </div>

    

            <div className="div4">
              <div className="div5">
                <div className="a">
                  <div className="span">
                    <a href="#" className="buy-a-ticket" > BUY A TICKET</a>
                    <img
                      className="spanafter-icon"
                      alt=""
                      src={span_after}
                    />
                  </div>
                </div>
                <div className="a1">
                  <a href="#" className="become-a-sponser">BECOME A SPONSER</a>
                  {/* <div className="become-a-sponser">BECOME A SPONSER</div> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
