import MainCardListItem from '../main-card-list-item/main-card-list-item';
import './main-card-list.css';
import {Component} from 'react';

class MainCardList extends Component {

  render() {
    const {toggleModal, getId, data} = this.props

    const items = data.map(item => {
      return (
        <MainCardListItem toggleModal={toggleModal} getId={() => getId(item.id)} key={item.id} {...item}/>
      )
    })
    
    return (
      <div className="main-card-list">
        {items}
      </div>
    )
  }
}

export default MainCardList;