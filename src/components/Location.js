import linesPath from '../images/lines-black.png'
function Location() {
  return (
    <section className="location">
      <h2 className="location__title">Мы совсем рядом!</h2>
      <img className="location__background-lines" src={linesPath}></img>
      <iframe className="location__map" src="https://yandex.ru/map-widget/v1/-/CCUBYNduWC"  frameBorder="1" ></iframe>
    </section>
  );
}

export default Location;