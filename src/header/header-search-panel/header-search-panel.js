import './header-search-panel.css';

const HeaderSearchPanel = () => {
  return (
    <div className="header-form-search-panel">     
        <form class="header-search">
          <input className = "search-panel" type="text" placeholder="Поиск" name="search"></input>
            <button type="submit" class="button-search" >
              <img src="./images/icon-search.svg" alt="img"/>
            </button>    
        </form>
    </div>   
  )
}

export default HeaderSearchPanel;