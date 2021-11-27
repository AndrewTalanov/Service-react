import './header-search-panel.css';

const HeaderSearchPanel = () => {
  return (
    <div className="header-form-search-panel">
      <input className="search-panel" type="text" placeholder="Поиск" name="search"></input>
      <button type="submit" className="button-search" >
        <img src="./images/icon-search.svg" alt="img" />
      </button>
    </div>
  )
}

export default HeaderSearchPanel;