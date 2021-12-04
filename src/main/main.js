import MainCardList from './main-card-list/main-card-list';
import './main.css';

const Main = ({toggleModal, restData, isOpenCard}) => {
  
  return (
    <div className="main">
      <MainCardList
        toggleModal={toggleModal}
        restData={restData}
        isOpenCard={isOpenCard}/>
    </div>
  )
}

export default Main;