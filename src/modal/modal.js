import './modal.css';

const Modal = ({visibleModal, toggleModal}) => {
    // onClick={() => toggleModal(false)}
    return(
        <div className= {visibleModal ? "modal active" : "modal"}>
            <div className="modal__content" onClick={ e => e.stopPropagation()}>

            </div>
        </div>
    )
}

export default Modal;