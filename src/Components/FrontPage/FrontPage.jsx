import "./FrontPage.css";
import PortraitContainer from "../PortraitContainer/PortraitContainer";
import BannerTextContainer from "../BannerTextContainer/BannerTextContainer";

function FrontPage() {
  return (
    <div id="front-page">
      <div id="hero-banner">
        <PortraitContainer />
        <BannerTextContainer />
      </div>
    </div>
  );
}

export default FrontPage;
