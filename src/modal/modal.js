import './modal.css';
import ModalClose from './modal-close/modal-close';

const Modal = ({visibleModal, toggleModal}) => {
    
    return(
        <div className= {visibleModal ? "modal active" : "modal"}>
            <div className="modal__content" onClick={ e => e.stopPropagation()}>
                <ModalClose toggleModal={toggleModal}/>
            </div>
        </div>
    )
}

export default Modal;