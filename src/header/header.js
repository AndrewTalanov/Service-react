import './header.css';

const Header = () => {
  return (
    <div className="header">
          <div className="change__city">
            <div className="change__city-container">
              <p>Москва</p>
              <img src="./images/change-city-icon.svg" alt="img-error" />
            </div>      
         </div>
        <div className="header__wrapper">
            <div className="title">
              <h1>Доступные рестораны</h1>
            </div>
          <div className="search__container">
            <img src="./images/icon-search.svg" alt="img-error" />
          </div>
        </div>    
    </div>
  )
}

export default Header;