import './modal.css';
import ModalClose from './modal-close/modal-close';

const Modal = ({visibleModal, toggleModal}) => {
    // onClick={() => toggleModal(false)}
    return(
        <div className= {visibleModal ? "modal active" : "modal"}>
            <div className="modal__content" onClick={ e => e.stopPropagation()}>
                <ModalClose>
               
                </ModalClose>
            </div>
        </div>
    )
}

export default Modal;