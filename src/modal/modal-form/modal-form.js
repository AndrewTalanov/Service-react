import './modal-form.css';
import ModalFormInput from './modal-form-input/modal-form-input'
import ModalFormList from './modal-form-list/modal-form-list'
import ModalFormListItem from './modal-form-list-item/modal-form-list-item'

const ModalForm = () => {
  return (
    <div className ="modal-form-wrapper">
        <ModalFormList></ModalFormList>
        <ModalFormListItem></ModalFormListItem>
    </div>
  )
}

export default ModalForm;