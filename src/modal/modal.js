import './modal.css';

const Modal = ({visibleModal, toggleModal}) => {
    
    return(
        <div className= {visibleModal ? "modal active" : "modal"} onClick={() => toggleModal(false)}>
            <div className="modal__content" onClick={ e => e.stopPropagation()}>

            </div>
        </div>
    )
}

export default Modal;