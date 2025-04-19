import PortraitContainer from "./PortraitContainer";
import BannerTextContainer from "./BannerTextContainer";

function HomePage({ setView }) {
  return (
    <div id="front-page">
      <div id="hero-banner">
        <PortraitContainer />
        <BannerTextContainer setView={setView} />
      </div>
    </div>
  );
}

export default HomePage;
