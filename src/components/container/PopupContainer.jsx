import { useContext } from 'react'
import AddNewPopup from '../popup/AddNewPopup'
import { AddPopupContext } from '../../context/AddPopupContext'

function PopupContainer() {

    const addPopupContext = useContext(AddPopupContext)
    const [isOpenAdd] = addPopupContext

    return (
        <div>
            {isOpenAdd !== 0 && <AddNewPopup />}
        </div>
    )
}

export default PopupContainer
