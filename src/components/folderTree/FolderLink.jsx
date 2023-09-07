import { useState } from "react"
import ItemContainer from "./ItemContainer"
import useGetFolderContent from "../../services/folder/useGetFolderContent"
import { Link } from "react-router-dom"
import checkLogin from "../../utils/checkLogin"
import { useSelector } from "react-redux"

function FolderLink({ data }) {
    const userID = useSelector(state => state.auth.userId)
    const { folderContent } = useGetFolderContent(userID, data?.id)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className="flex justify-start items-center gap-2.5 px-2 py-3 rounded-lg">

                {!isOpen && <i
                    onClick={() => { setIsOpen(!isOpen) }}
                    className="fa-solid fa-folder text-kb-neutral-300 fa-sm"></i>
                }

                {isOpen && <i onClick={() => { setIsOpen(!isOpen) }} className="fa-solid fa-folder-open fa-sm text-kb-primary-color"></i>}

                <Link to={`/home/content/${data?.id}`} className="text-kb-neutral-300 l3-b hover:underline">{data?.name?.length >= 25 ? data?.name?.slice(0, 25) + '...' : data?.name}</Link>

            </div>

            <div className={`${isOpen ? ' block ml-3 pl-4 border-l ' : 'hidden'}`}>
                {folderContent?.length === 0
                    ? <div className="text-kb-neutral-100 p3-r">-- Empty --</div>
                    : <ItemContainer explore={folderContent} />}
            </div>

        </div>

    )
}

export default FolderLink
