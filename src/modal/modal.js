import './modal.css';
import ModalClose from './modal-close/modal-close';
import ModalForm from './modal-form/modal-form';
import ModalSlider from './modal-slider/modal-slider'
import ModalMap from './modal-map/modal-map'
import ModalDrawing from './modal-drawing/modal-drawing'

const Modal = ({toggleModal}) => {
    
    return(
        <div className= "modal">
            <div className="modal__content" onClick={ e => e.stopPropagation()}>
                <ModalClose toggleModal={toggleModal}/>
                    <div className="restaurant-left">
                        <div className="restaurant-name">
                            <h1>Belochka</h1>
                        </div>       
                        <div className="restaurant-information-list">             
                            <div className="restaurant-information-adress">
                                <div className="restaurant-information-phone-item">
                                    <h3>Номер телефона:</h3>
                                    <p>8(800)-555-35-35</p>                                   
                                </div>
                                <div className="restaurant-information-location-item">
                                    <h3>Адрес:</h3>
                                    <p>Российская, 84</p>
                                </div>
                                <div className="restaurant-information-time-item">
                                    <h3>Время работы:</h3>
                                    <p>12:00 - 22:00</p>
                                </div>
                            </div>
                            <div className="restaurant-information-statistics">
                                <div className="restaurant-information-statistics-item">                            
                                    <div className="restaurant-statistic-star">
                                        <h3>Оценка ресторана:</h3>
                                        <img src="./images/star_active.svg" alt="star" />
                                        <img src="./images/star_active.svg" alt="star" />
                                        <img src="./images/star_active.svg" alt="star" />
                                        <img src="./images/star_active.svg" alt="star" />
                                        <img src="./images/star.svg" alt="star" />
                                    </div>
                                    <div className="restaurant-statistic-price">
                                        <h3>Средняя цена чека:</h3>
                                        <img src="./images/value_active.svg" alt="value" />
                                        <img src="./images/value_active.svg" alt="value" />
                                        <img src="./images/value_active.svg" alt="value" />
                                        <img src="./images/value.svg" alt="value" />
                                        <img src="./images/value.svg" alt="value" />
                                        </div>
                                    <div className="restaurant-statistic-visitors">
                                        <h3>Свободных мест:</h3>
                                        <p>17</p>                
                                    </div> 
                                </div>                                                
                            </div>                       
                        </div>
                <ModalForm></ModalForm>
                </div>             
                <div className="restourant-right">
                    <ModalSlider></ModalSlider>
                    <div className="restaurant-maps">
                    <ModalDrawing></ModalDrawing>  
                    <ModalMap></ModalMap>                               
                    </div>                
                </div>             
            </div>
        </div>     
    )
}

export default Modal;