import './main-card-list-item.css'

const MainCardListItem = (props) => {
  
  const {name, timeStart, timeEnd, street, house, images, stars, receipt, id} = props

  let allStars = '';
  let allRec = '';
  const getIcons = () => {
    for (let i = 0; i < stars; i++) {
      allStars += '<img src="./images/star_active.svg" alt="star" />'
    }
    if (stars < 5) {
      for (let i = 0; i < 5 - stars; i++) {
        allStars += '<img src="./images/star.svg" alt="star" />' 
      }
    }

    for (let i = 0; i < receipt; i++) {
      allRec += '<img src="./images/value_active.svg" alt="star" />'
    }
    if (receipt < 5) {
      for (let i = 0; i < 5 - receipt; i++) {
        allRec += '<img src="./images/value.svg" alt="star" />' 
      }
    }

    return allStars, allRec
  }
  getIcons()

  return (
    <div onClick={() => {props.isOpenCard(id); props.toggleModal(true)}} className="restaurant-container__card">
      <div className="restaurant_container__card-naming">
        <img className="card-list-item-img" src={images[0]} alt="img-error" />
        <p className="card-list-item-title">{name}</p>
        <div className="restaurant_container__card-discription">
          <div className="restaurant_container_card__discription-contact">
            <div className="restaurant-card-icon-items" dangerouslySetInnerHTML={{__html: allStars}}>
            </div>
            <div className="restaurant-card-icon-items" dangerouslySetInnerHTML={{__html: allRec}}>
            </div>
          </div>
          <div className="restaurant_container_card__discription-price">
            <p>{street}, {house}</p>
            <p className="card-description-time">{timeStart}:00 - {timeEnd}:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCardListItem;