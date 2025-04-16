import "./ButtonContainer.css";
import Button from '../Button/Button'

function ButtonContainer() {
  return (
    <div id="button-container">
      <div className="button-row">
        <Button text={'About Me'}/>
        <Button text={'Projects'}/>
      </div>
      <div className="button-row">
        <Button text={'Github'} external/>
        <Button text={'LinkedIn'} external/>
      </div>
    </div>
  );
}

export default ButtonContainer;