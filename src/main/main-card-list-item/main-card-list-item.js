import './main-card-list-item.css'

const MainCardListItem = (props) => {
  
  const {name, timeStart, timeEnd, stars, receipt, street, house, images} = props
  return (
    <div onClick={() => props.toggleModal(true)} className="restaurant-container__card">
      <div className="restaurant_container__card-naming">
        <img className="card-list-item-img" src={images[0]} alt="img-error" />
        <p className="card-list-item-title">{name}</p>
        <div className="restaurant_container__card-discription">
          <div className="restaurant_container_card__discription-contact">
            <div className="restaurant-card-icon-items">
              <img src="./images/star_active.svg" alt="star" />
              <img src="./images/star_active.svg" alt="star" />
              <img src="./images/star_active.svg" alt="star" />
              <img src="./images/star_active.svg" alt="star" />
              <img src="./images/star.svg" alt="star" />
            </div>
            <div className="restaurant-card-icon-items">
              <img src="./images/value_active.svg" alt="value" />
              <img src="./images/value_active.svg" alt="value" />
              <img src="./images/value_active.svg" alt="value" />
              <img src="./images/value.svg" alt="value" />
              <img src="./images/value.svg" alt="value" />
            </div>
          </div>
          <div className="restaurant_container_card__discription-price">
            <p>{street}, {house}</p>
            <p>{timeStart}:00 - {timeEnd}:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCardListItem;