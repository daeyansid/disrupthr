import React from 'react';
import './SectionA.css';
import '../../Components/Main.css';
import '../../Components/Global.css';
import ImageB from '../../Assests/image-8@2x.png';
import ImageC from '../../Assests/image-7@2x.png';
import ImageD from '../../Assests/image-6@2x.png';
import Layer from '../../Assests/layer-1.svg';
import Div from '../../Assests/div.svg';


function SectionA() {
  return (
      <div className="mainprimary">
      <div className="section">
          <div className="h2">
            <div className="ways-you-can">Ways you can get involved!</div>
            <div style={{width:'100%',marginLeft:'100px'}}>

          <img className="layer-1-icon" alt="" src={Layer} />
            </div>
          </div>
          <div className="div6">
            <div className="featured-in">Featured in:</div>
            <img className="div-icon" alt="" src={Div} />
          </div>
          <img className="image-8-icon" alt="" src={ImageB} />
          <img className="image-7-icon" alt="" src={ImageC} />
          <img className="image-6-icon" alt="" src={ImageD} />
        </div>
    </div>
  )
}

export default SectionA
