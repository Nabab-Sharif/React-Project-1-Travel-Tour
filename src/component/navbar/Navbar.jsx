
import './Navbar.css'
import img from '../../assets/logo.png'
import Banner from '../banner/Banner'

function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src={img} alt="logo.png" />
            </a>
          </div>

          <div className="menu">
            <ul>
              <li><a className="active" href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Culture</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <Banner />









    </div>
  )
}

export default Navbar