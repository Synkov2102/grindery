import bigLogoPath from "../images/big-logo.png";
import square1Path from "../images/Rectangle 1.svg";
import square2Path from "../images/Rectangle 2.svg";
import square3Path from "../images/Rectangle 3.svg";
import square4Path from "../images/Rectangle 4.svg";
import circle1Path from "../images/Ellipse 1.svg"
import circle2Path from "../images/Ellipse 2.svg"

function FirstOffer() {
    return (
      <section className="first-offer">
        <div className="first-offer__container">
          <div className="first-offer__info-container">
          <h1 className="first-offer__title">Наточим ваши ножи и ножницы!</h1>
          <p className="first-offer__subtitle">Лучшая мастерская заточки в софрино-1</p>
          <button className="first-offer__button button">связаться</button>
        </div>
        <img className="first-offer__logo" src={bigLogoPath}></img>
        </div>
        <img id='square-1' src={square1Path} className="rotation-animation"></img>
        <img id='square-2' src={square2Path} className="rotation-animation"></img>
        <img id='square-3' src={square3Path} className="rotation-animation"></img>
        <img id='square-4' src={square4Path} className="rotation-animation"></img>
        <img id='circle-1' src={circle1Path}></img>
        <img id='circle-2' src={circle2Path}></img>
        <img id='circle-3' src={circle2Path}></img>
        <img id='circle-4' src={circle2Path}></img>
      </section>
    );
  }
  
  export default FirstOffer;