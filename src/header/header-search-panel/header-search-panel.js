import './header-search-panel.css';
import { Component } from 'react';

class HeaderSearchPanel extends Component{
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value
    this.setState({term})
    this.props.onUpdateSearch(term.toLowerCase())
  }

  render() {
    return (
      <div className="header-form-search-panel">
        <input
          onChange={this.onUpdateSearch}
          className="search-panel"
          type="text"
          placeholder="Поиск"
          name="search"
          value={this.state.term}></input>
        <div className="button-search" >
          <img src="./images/icon-search.svg" alt="img" />
        </div>
      </div>
    )
  }
}

export default HeaderSearchPanel;