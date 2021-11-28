import MainCardList from './main-card-list/main-card-list';
import './main.css';

const Main = ({toggleModal, restData}) => {
  
  return (
    <div className="main">
      <MainCardList
        toggleModal={toggleModal}
        restData={restData}/>
    </div>
  )
}

export default Main;