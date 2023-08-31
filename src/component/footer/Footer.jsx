

import img from '../../assets/footerLogo.png'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">

          <div className="left">
            <a href="#">
              <img src={img} alt="" />
            </a>

            <h2>Lets go on vacation, Make your day</h2>
            <p>Terms & Conditions</p>
            <div className="icon">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="right">

            <div className="title">
              <p>Ready to explore?</p>
              <a href="#">Get started</a>
            </div>

            <div className="footer_menu">
              <ul className="service">
                <h3>Services</h3>
                <li><a href="#">Email Marketing</a></li>
                <li><a href="#">Campaigns</a></li>
                <li><a href="#">Branding</a></li>
                <li><a href="#">Offline</a></li>
              </ul>

              <ul className="about">
                <h3>About</h3>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Benefits</a></li>
                <li><a href="#">Term</a></li>
                <li><a href="#">Career</a></li>
              </ul>

              <ul className="help">
                <h3>Help</h3>
                <li><a href="#">FAQS</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>

            </div>


          </div>


        </div>

        <p className="copy_part">Copyright 2023 QWERy</p>

      </footer>
    </div>
  )
}

export default Footer