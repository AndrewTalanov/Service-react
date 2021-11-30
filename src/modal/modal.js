import './modal.css';
import ModalClose from './modal-close/modal-close';

const Modal = ({toggleModal}) => {
    
    return(
        <div className= "modal">
            <div className="modal__content" onClick={ e => e.stopPropagation()}>
                <ModalClose toggleModal={toggleModal}/>
            </div>
        </div>
    )
}

export default Modal;