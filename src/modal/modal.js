import './modal.css'
import ModalClose from './modal-close/modal-close'
import ModalForm from './modal-form/modal-form'
import ModalSlider from './modal-slider/modal-slider'
import ModalMap from './modal-map/modal-map'
import ModalDrawing from './modal-drawing/modal-drawing'

const Modal = ({toggleModal, dataOpenCard}) => {
    
    const {id, name, city,  timeEnd, timeStart, stars, street, house, phone, receipt, table, tableFree, site, coordinates,  images} = dataOpenCard

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
    
    return(
        <div className= "modal">
            <div className="modal__content" onClick={ e => e.stopPropagation()}>
                <ModalClose toggleModal={toggleModal}/>
                    <div className="restaurant-left">
                        <div className="restaurant-name">
                            <h1>{name}</h1>
                        </div>       
                        <div className="restaurant-information-list">             
                            <div className="restaurant-information-adress">
                                <div className="restaurant-information-phone-item">
                                    <h3>Номер телефона:</h3>
                                    <p>{phone}</p>                                   
                                </div>
                                <div className="restaurant-information-location-item">
                                    <h3>Адрес:</h3>
                                    <p>{street}, {house}</p>
                                </div>
                                <div className="restaurant-information-time-item">
                                    <h3>Время работы:</h3>
                                    <p>{timeStart}:00 - {timeEnd}:00</p>
                                </div>
                            </div>
                            <div className="restaurant-information-statistics">
                                <div className="restaurant-information-statistics-item">                            
                                    <div className="restaurant-statistic-star">
                                        <h3>Оценка ресторана:</h3>
                                        <div dangerouslySetInnerHTML={{__html: allStars}}></div>
                                    </div>
                                    <div className="restaurant-statistic-price">
                                        <h3>Средняя цена чека:</h3>
                                        <div dangerouslySetInnerHTML={{__html: allRec}}></div>
                                    </div>
                                    <div className="restaurant-statistic-visitors">
                                        <h3>Свободных мест:</h3>
                                        <p>{tableFree}</p>                
                                    </div> 
                                </div>                                                
                            </div>                       
                        </div>
                    <ModalForm/>
                </div>             
                <div className="restourant-right">
                        <ModalSlider/>
                    <div className="restaurant-maps">
                        <ModalDrawing/>
                        <ModalMap/>
                    </div>                
                </div>             
            </div>
        </div>     
    )
}

export default Modal;