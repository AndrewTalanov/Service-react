import MainCardListItem from '../main-card-list-item/main-card-list-item';
import './main-card-list.css';

const MainCardList = ({data}) => {

  const items = data.map(item => {
    return (
      <MainCardListItem key={item.id} {...item}/>
    )
  })

  return (
    <div className="main-card-list">
      {items}
    </div>
  )
}

export default MainCardList;