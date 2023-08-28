import { useState } from "react"
import ItemContainer from "./ItemContainer"
import useGetFolderContent from "../../services/folder/useGetFolderContent"

function FolderLink({ data }) {
    const { folderContent } = useGetFolderContent(data?.id)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className="flex justify-start items-center gap-2.5 px-2 py-3 rounded-lg">
                {!isOpen && <i
                    onClick={() => { setIsOpen(!isOpen) }}
                    className="fa-solid fa-folder text-kb-neutral-300 fa-sm"></i>}
                {isOpen && <i onClick={() => { setIsOpen(!isOpen) }} className="fa-solid fa-folder-open fa-sm text-kb-primary-color"></i>}
                <div className="text-kb-neutral-300 l3-b">{data?.name}</div>
            </div>

            <div className={`${isOpen ? ' block ml-7' : 'hidden'}`}>
                {folderContent?.length === 0
                    ? <div className="text-kb-neutral-100 p3-r">-- Empty --</div>
                    : <ItemContainer explore={folderContent} />}
            </div>

        </div>

    )
}

export default FolderLink
