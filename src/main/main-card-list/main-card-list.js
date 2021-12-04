import MainCardListItem from '../main-card-list-item/main-card-list-item';
import './main-card-list.css';
import {Component} from 'react';

class MainCardList extends Component {

  render() {
    const {toggleModal, restData, isOpenCard} = this.props
    
    const items = restData.restorans.map(item => {
      return (
        <MainCardListItem
          toggleModal={toggleModal}
          restData={restData}
          key={item.id} {...item}
          isOpenCard={isOpenCard}/>
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