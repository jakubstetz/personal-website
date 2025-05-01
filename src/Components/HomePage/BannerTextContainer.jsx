import ButtonContainer from "./ButtonContainer";

function BannerTextContainer({ setView }) {
  return (
    <div id="banner-text-container">
      <h1 className="centered-text">Hugo Jakub Stetz</h1>
      <div id="intro-text">
        <p>
          Backend-focused software engineer, shaped by monastic living and the
          US Navy's nuclear engineering program.
        </p>
        <p>Welcome to my website.</p>
      </div>
      <ButtonContainer setView={setView} />
    </div>
  );
}

export default BannerTextContainer;
