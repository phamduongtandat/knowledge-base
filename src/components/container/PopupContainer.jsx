import AddNewPopup from '../popup/AddNewPopup'
import { useSelector } from 'react-redux'
import RenamePopup from '../popup/RenamePopup'
import ProperPopup from '../popup/ProperPopup'
import ShareList from '../popup/ShareList'
import MovePopup from '../popup/MovePopup'
import TerminatePopup from '../popup/TerminatePopup'
import FolderTreePopup from '../popup/FolderTreePopup'

import SelectEditorPopup from '../popup/SelectEditorPopup'
import LogOutPopup from '../popup/logOutPopup'

function PopupContainer() {

    const isOpenAdd = useSelector(state => state.popup.isAddContent)
    const isRename = useSelector(state => state.popup.isRename)
    const isProper = useSelector(state => state.popup.isProper)
    const isShare = useSelector(state => state.popup.isShare)
    const isMove = useSelector(state => state.popup.isMove)
    const isTerminate = useSelector(state => state.popup.isTerminate)
    const isTree = useSelector(state => state.popup.isTree)
    const isSelect = useSelector(state => state.popup.isSelect)
    const isLogOutRedux = useSelector(state => state.popup.isLogOut)
    let isLogOut = JSON.parse(localStorage.getItem('isLogOut')) || false

    return (
        <div>
            {isOpenAdd !== 0 && <AddNewPopup />}
            {isRename && <RenamePopup />}
            {isProper && <ProperPopup />}
            {isShare && <ShareList />}
            {isMove && <MovePopup />}
            {isTerminate && <TerminatePopup />}
            {isTree && <FolderTreePopup />}
            {isSelect && <SelectEditorPopup />}
            {(isLogOut || isLogOutRedux) && <LogOutPopup />}
        </div>
    )
}

export default PopupContainer
