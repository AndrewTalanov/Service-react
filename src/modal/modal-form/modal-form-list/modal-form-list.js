import './modal-form-list.css';

const ModalFormList = () => {
  return (
    <div className = "modal-form-list-container">
        <div className="modal-form-list-order-params">
          <form name="order" method="get" action="#">
            <div className="modal-form-guest">                     
                  <h3>Укажите количество гостей:</h3>
                  <input type="text" size="3"></input>         
            </div>
            <div className="modal-form-time">                  
                  <h3>Выберите время бронирования:</h3>
                  <input type="text" size="3"></input>
                  <p> - 22:00</p>              
            </div>
            <div className="modal-form-choice-table">
              <h3>Выберите желаемые столики из свободных:</h3>
              <p>*Узнать расположение столиков можно нажав на карту ресторана</p>
              <div className="choice-table-radio">
                <div class="form_radio_btn">
	                <input id="radio-1" type="radio" name="radio" value="1" checked></input>
	                <label for="radio-1">1</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-2" type="radio" name="radio" value="2" checked></input>
	                <label for="radio-2">2</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-3" type="radio" name="radio" value="3" checked></input>
	                <label for="radio-3">3</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-4" type="radio" name="radio" value="4" checked></input>
	                <label for="radio-4">4</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-5" type="radio" name="radio" value="5" checked></input>
	                <label for="radio-5">5</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-6" type="radio" name="radio" value="6" checked></input>
	                <label for="radio-6">6</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-7" type="radio" name="radio" value="7" checked></input>
	                <label for="radio-7">7</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-8" type="radio" name="radio" value="8" checked></input>
	                <label for="radio-8">8</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-9" type="radio" name="radio" value="9" checked></input>
	                <label for="radio-9">9</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-10" type="radio" name="radio" value="10" checked></input>
	                <label for="radio-10">10</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-11" type="radio" name="radio" value="11" checked></input>
	                <label for="radio-11">11</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-12" type="radio" name="radio" value="12" checked></input>
	                <label for="radio-12">12</label>
                </div>
                <div class="form_radio_btn">
	                <input id="radio-13" type="radio" name="radio" value="13" checked></input>
	                <label for="radio-13">13</label>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
  )
}

export default ModalFormList;