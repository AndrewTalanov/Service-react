import './modal.css';

const Modal = ({modal}) => {
    // console.log(modal)
    return(
        <div className= {modal ? "modal active" : "modal"}>
            <div className="modal__content" onClick={ e => e.stopPropagation()}>

            </div>
        </div>
    )
}

export default Modal;