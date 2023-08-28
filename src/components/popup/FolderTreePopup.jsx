import { useDispatch } from "react-redux"
import { treePopup } from "../../redux/popupSlice"
import useGetHomePage from "../../services/home/useGetHomePage"
import ItemContainer from "../folderTree/ItemContainer"


function FolderTreePopup() {
    const dispatch = useDispatch()

    const { homePageContent } = useGetHomePage('all')


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

            <div className="absolute h-1/2 top-1/4 left-2 kb-shadow-white-bg inline-flex pl-5   py-2.5 rounded-lg ">
                <ItemContainer explore={homePageContent} />
            </div>

        </div>
    )
}

export default FolderTreePopup
