import React from 'react';
import './Footer.css';
import '../../Components/Main.css';
import '../../Components/Global.css';
import Image from '../../Assests/image-5@2x.png';
import Svg from '../../Assests/svg.svg';
import Svg1 from '../../Assests/svg1.svg';
import Svg2 from '../../Assests/svg2.svg';
import Image2 from '../../Assests/image-51@2x.png';


function Footer() {
  return (
    <div className="footer">
    <img
      className="image-5-icon"
      alt=""
      src={Image}
    />

    <div className="div29">
      <div className="div30">
        <div className="scan-detect-remove">Scan. Detect. Remove.</div>

        <div className="ul">
          <img className="svg-icon" alt="" src={Svg} />

          <img className="svg-icon" alt="" src={Svg1} />

          <img className="svg-icon" alt="" src={Svg2} />
        </div>

        <div className="ulmenu-secondary-menu-1">
          <div className="privacy-policy">Privacy Policy</div>
          <div className="privacy-policy">Terms of Service</div>
        </div>
        <div className="div31">
          <div className="designed-developed">
            Designed & developed by Monitr
          </div>
        </div>
      </div>
       <div className="copyright-2023">Copyright © 2023</div>

      <div className="div32">
        <div className="p4">
          <div className="menu">Menu</div>
        </div>
        <div className="ulmenu-footer-menu">
          <div className="a11">
            <div className="span7">
              <div className="spanbefore"></div>
              <div className="spanafter"></div>
            </div>
            <a href="#" className='home'>Home</a>
          </div>
          <div className="a12">
            <div className="span7">
              <div className="spanbefore"></div>
              <div className="spanafter"></div>
            </div>
            <a href="#" className='home'>Press</a>
          </div>
          <div className="a13">
            <div className="span7">
              <div className="spanbefore"></div>
              <div className="spanafter"></div>
            </div>
            <a href="#" className='home'>Speaker</a>
          </div>
          <div className="a14">
            <div className="span7">
              <div className="spanbefore"></div>
              <div className="spanafter"></div>
            </div>
            <a href="#" className='home'>Help</a>
          </div>
          <div className="a15">
            <div className="span7">
              <div className="spanbefore"></div>
              <div className="spanafter"></div>
            </div>
            <a href="#" className='home'>Sponsership</a>
          </div>
        </div>
      </div>

      <div className="div33">
        <div className="formnewsletter-signup-footer-">
          <div className="div34">
            <div className="div35">
              <div className="read-our-story">Sign up to our newsletter</div>
              <div className="receive-the-latest">
                Receive the latest mobile security news, exclusive discounts
                & offers straight to your inbox!
              </div>
            </div>
            <div className="div36">
             <input type="email" className='email' name="" id="" placeholder='      Email address' />
              <div className="button1">
                <div className="submit">
                  Submit
                </div>
              </div>
            </div>
          </div>
          <div className="formnewsletter-signup-footer-1">
            <img
              className="image-5-icon1"
              alt=""
              src={Image2}
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Footer
