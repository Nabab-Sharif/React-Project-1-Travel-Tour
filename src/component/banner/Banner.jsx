
import './Banner.css'
import Holiday from '../holiday/Holiday'


function Banner() {
  return (
    <div>
      <section id="banner_part">
        <div className="container">
          <p>explore the Nature Beauty</p>
          <h1>Discover</h1>
          <h2>Wonderful Indonesia</h2>
        </div>
      </section>

      <Holiday />

    </div>
  )
}

export default Banner