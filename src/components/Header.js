import smallLogoPath from "../images/small-logo.png"

function Header() {
    return (
      <header className='header'>
        <div className='header__logo-container'>
          <img className='header__logo' src={smallLogoPath} alt='Логотип "Grindery"'></img>
          <p className='header__phone'>+7 (999) 831-01-01</p>
        </div>
        <nav className='header__nav'>
          <button className='header__link'>цены</button>
          <button className='header__link'>услуги</button>
          <button className='header__link'>контакты</button>
          <button className='header__button button'>позвонить</button>
        </nav>
      </header>
    );
}

export default Header