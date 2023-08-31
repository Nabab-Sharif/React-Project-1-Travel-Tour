
import './Culture.css'
import img from '../../assets/culture.jpg'
import Footer from '../footer/Footer'

function Culture() {
  return (
    <div>
      <section id="holiday">
        <div className="container culture">
          <div className="image">
            <img src={img} alt="culture.jpg" />
          </div>

          <div className="text">
            <p className="eastText">INDONESIAN CULTURE</p>
            <h2>Our culture here is very friendly to people</h2>
            <p className="details">known for his politeness, manners and gentleness. This becomes a characteristic when they
              mingle with other tribes and become basic traits that are passed down by their ancestors..</p>
            <a href="#" className="readMore">read more</a>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  )
}

export default Culture