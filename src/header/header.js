import HeaderSelectCity from './header-select-city/header-select-city';
import HeaderSearchPanel from './header-search-panel/header-search-panel';
import './header.css';
import HeaderFilterPanel from './header-filter-panel/header-filter-panel';

const Header = ({onUpdateSearch}) => {
  return (
    <div className="header">
      <HeaderSelectCity/>
      <div className="header-filters">
        <h1 className="header-filters-title">
          Доступные рестораны
        </h1>
        <form action="" className="header-form">
          <HeaderFilterPanel/>
          <HeaderSearchPanel onUpdateSearch={onUpdateSearch}/>  
        </form>
      </div>
    </div>
  )
}

export default Header;