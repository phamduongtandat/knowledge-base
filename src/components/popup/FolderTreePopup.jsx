import { useDispatch } from "react-redux"
import { treePopup } from "../../redux/popupSlice"
import useGetHomePage from "../../services/home/useGetHomePage"
import ItemContainer from "../folderTree/ItemContainer"
import checkLogin from "../../utils/checkLogin"
import useGetUserID from "../../services/auth/useGetUserID"


function FolderTreePopup() {
    const dispatch = useDispatch()
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { homePageContent } = useGetHomePage(userID, 'all')


    return (
        <div
            id='addBackDrop'
            onClick={({ target }) => {

                if (target.id === 'addBackDrop') {
                    dispatch(treePopup(false))
                }
            }}
            className="bg-kb-neutral-200 fixed z-50 inset-0"
        >

            <div className="absolute md:top-1/4 2xl:top-52 left-2 kb-shadow-white-bg inline-flex pl-5 h-fit py-2.5 rounded-lg ">
                <ItemContainer explore={homePageContent} />
            </div>

        </div>
    )
}

export default FolderTreePopup
