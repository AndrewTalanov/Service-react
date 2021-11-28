import './header-select-city.css';

const HeaderSelectCity = () => {
  return (
    <div className="header-select-city">
      <div className="header-select-city-content">
        <div className="header-select-city_dropdown-menu">
          <p>Москва</p>
          <img src="./images/change-city-icon.svg" alt="img" />
        </div>
        <div className="dropdown-active">
          <p>Москва</p>
          <p>Челябинск</p>
          <p>Екатеринбург</p>
          <p>Владивосток</p>
          <p>Махачкала</p>
          <p>Краснодар</p>
          <p>Краснодар</p>
          <p>Краснодар</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderSelectCity;