import "./PortraitContainer.css";
import portrait from '../../assets/images/portrait.jpg'

function PortraitContainer() {
  return (
    <div className="image-container">
      <img src={portrait} />
    </div>
  );
}

export default PortraitContainer;
