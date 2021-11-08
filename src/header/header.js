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
        <div className="header-form-search-panel">   
          <div className="header-form-search-panel__container">
            <img src="./images/icon-search.svg" alt="img-error" />
            <form action="">
              <label>
                <input type="search" placeholder=" restaurant search" />
              </label>
          </form>
          </div>
          <div className="header-filtration">
              <button className = "header-filtration__button">
                  <img src="./images/filtration-icon.svg" alt="" />
              </button>
            </div>
          </div>  
        </div>    
    </div>
  )
}

export default Header;