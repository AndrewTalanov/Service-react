import './header-select-city-item.css';

const HeaderSelectCityItem = () => {
  return (
    <div className="header-select-city">
      <div className="header-select-city-content">
        <div className="header-select-city_dropdown-menu">
          <p>Москва</p>
          <img src="./images/change-city-icon.svg" alt="img" />
        </div>
      </div>
    </div>
  )
}

export default HeaderSelectCityItem;