import "./HeroBanner.css";
import portrait from '../../assets/images/portrait.jpg'
import coverImage from '../../assets/images/cover-image-main.jpg'

function HeroBanner() {
  return (
    <header style={{ backgroundImage: `url(${coverImage})` }}>
      <div id="intro-banner">
        <div className="image-container">
          <img src={portrait} />
        </div>
        <div id="intro-text">
          <h1 className="centered-text">Hugo Jakub Stetz</h1>
          <ul>
            <li>Commissioned Naval nuclear officer.</li>
            <li>Software developer.</li>
            <li>Transformational coach.</li>
            <li>Former monk.</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeroBanner;
