import AddNewPopup from '../popup/AddNewPopup'
import { useSelector } from 'react-redux'
import RenamePopup from '../popup/RenamePopup'
import ProperPopup from '../popup/ProperPopup'
import ShareList from '../popup/ShareList'

function PopupContainer() {

    const isOpenAdd = useSelector(state => state.popup.isAddContent)
    const isRename = useSelector(state => state.popup.isRename)
    const isProper = useSelector(state => state.popup.isProper)
    const isShare = useSelector(state => state.popup.isShare)

    return (
        <div>
            {isOpenAdd !== 0 && <AddNewPopup />}
            {isRename && <RenamePopup />}
            {isProper && <ProperPopup />}
            {isShare && <ShareList />}
        </div>
    )
}

export default PopupContainer
