import HeaderSelectCity from './header-select-city/header-select-city';
import HeaderSearchPanel from './header-search-panel/header-search-panel';
import './header.css';
import HeaderFilterPanel from './header-filter-panel/header-filter-panel';

const Header = () => {
  return (
    <div className="header">
      <HeaderSelectCity/>
      <div className="header-filters">
        <div className="header-filters-title">
          <h1>Доступные рестораны</h1>
        </div>
        <form action="" className="header-form">
          <HeaderSearchPanel/>
          <HeaderFilterPanel/>
        </form>
      </div>
    </div>
  )
}

export default Header;