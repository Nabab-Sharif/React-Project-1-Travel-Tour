
import img from '../../assets/holidayPic.jpg'
import './Holiday.css'
import Bromo from '../bromo/Bromo'

function Holiday() {
  return (
    <div>
      <section id="holiday">
        <div className="container">
          <div className="image">
            <img src={img} alt="holidayPic.jpg" />
          </div>

          <div className="text">
            <p className="eastText">EAST nUSA TENGGARA</p>
            <h2>Have you enjoyed your holiday?</h2>
            <p className="details">You will be amazed if you take part in this sailing Komodo island tour package. So it is also
              mandatory for
              you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism. The
              beautiful waters of Komodo will make you meet many travelers from other countries.</p>
            <a href="#" className="readMore">read more</a>
          </div>

        </div>
      </section>

      <Bromo />

    </div>
  )
}

export default Holiday