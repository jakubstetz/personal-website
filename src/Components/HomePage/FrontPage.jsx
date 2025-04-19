import PortraitContainer from "./PortraitContainer";
import BannerTextContainer from "./BannerTextContainer";

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
