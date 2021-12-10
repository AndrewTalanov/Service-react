import MainCardList from './main-card-list/main-card-list';
import './main.css';

const Main = ({toggleModal, visibleData, isOpenCard}) => {
  
  return (
    <div className="main">
      <MainCardList
        toggleModal={toggleModal}
        visibleData={visibleData}
        isOpenCard={isOpenCard}/>
    </div>
  )
}

export default Main;