import './main-card-list-item.css'

const MainCardListItem = (props) => {
  return (
    <div className="restaurant-container__card">
      <div className="restaurant_container__card-naming">
        <img className="card-list-item-img" src={props.src} alt="img-error" />
        <p className="card-list-item-title">{props.name}</p>
        <div className="restaurant_container__card-discription">
          <div className="restaurant_container_card__discription-contact">
            <img src="./images/restaurant_stars.png" alt="img-error" />
            <p>{props.adress}</p>
          </div>
          <div className="restaurant_container_card__discription-price">
            <img src="./images/price.png" alt="img-error" />
            <p>{props.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCardListItem;