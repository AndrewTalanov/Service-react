import './modal-close.css';

const ModalClose = ({toggleModal}) => {
  
  return (
    <div className = "close-modal-window" onClick={() => toggleModal(false)}>
        <button className = "close-modal-window__btn">
          <img src="./images/close-modal.svg" alt="" />
        </button>
    </div>
  )
}

export default ModalClose;