import './modal-form-list-item.css';

const ModalFormListItem = () => {
  return (
    <div className = "modal-form-list-item-container">
       <form action="#">    
        <div className="modal-form-list-item-client-contacts">       
              <div className="client-contacts-email">
                <h3>Ваш Email:</h3>
              <input type="email" id="email" required></input>
              </div>
              <div className="client-contacts-phone">
              <h3>Ваш номер телефона:</h3>
              <input type="text" id="phone" required></input>
              </div>   
          </div>
          <div className="modal-form-item-client-wishes">
              <p><textarea className="client-wishes-text" name="text"></textarea></p>
          </div>
          <div className="btn-sumbit-form">
              <input type="submit" value="Забронировать"></input>
          </div>
        </form>
    </div>
  )
}

export default ModalFormListItem;