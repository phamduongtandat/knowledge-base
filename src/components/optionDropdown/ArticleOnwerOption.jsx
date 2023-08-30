import { useDispatch } from "react-redux"
import { getInfo, properPopup, renamePopup, sharePopup } from "../../redux/popupSlice"
import useMoveAFToBin from "../../services/option/useMoveAFToBin"
import { useLocation, useNavigate } from "react-router-dom"
import { getItemEdit, markdownEdit } from "../../redux/editSlice"

function ArticleOnwerOption({ info, setIsArticleOnwerOption }) {

    const navi = useNavigate()

    const optionList = [
        { label: 1, name: 'Like', img: 'fa-solid fa-heart fa-sm' },
        { label: 2, name: 'Edit', img: 'fa-solid fa-pen fa-sm' },
        { label: 3, name: 'Rename', img: 'fa-solid fa-pen-to-square fa-sm' },
        { label: 4, name: 'Share', img: 'fa-solid fa-share-nodes fa-sm' },
        { label: 5, name: 'Properties', img: 'fa-solid fa-info fa-sm' },
        { label: 6, name: 'Delete', img: 'fa-solid fa-trash-can fa-sm' },
    ]

    //const isProper = useSelector(state=>state.popup.isProper )
    const dispatch = useDispatch()
    const { MoveAFToBin } = useMoveAFToBin()
    const { pathname } = useLocation()
    const local = pathname?.split('/').pop()
    const handleSelect = (label) => {
        if (label === 2) {
            dispatch(getItemEdit(info))
            dispatch(markdownEdit(true))
            setIsArticleOnwerOption(false)

            navi(`/markdown/write/${local}`)
            return
        }

        if (label === 3) {
            dispatch(getInfo(info))
            dispatch(renamePopup(true))
            setIsArticleOnwerOption(false)
            return
        }

        if (label === 4) {
            dispatch(getInfo(info))
            dispatch(sharePopup(true))
            setIsArticleOnwerOption(false)
            return
        }

        if (label === 5) {
            dispatch(getInfo(info))
            dispatch(properPopup(true))
            setIsArticleOnwerOption(false)
            return
        }
        if (label === 6) {

            console.log('info :', info)
            MoveAFToBin(info?.id)
            return
        }
        console.log(' label:', label)
        //console.log('info :', info)
    }

    return (
        <div className="relative kb-shadow-white-bg w-40 rounded-lg ">

            {optionList.map(({ label, name, img }) => {
                return <div
                    key={label}
                    className="flex  justify-start items-center gap-3 pl-7 py-3 rounded-lg cursor-pointer hover:bg-kb-neutral-50/50 "
                    onClick={() => { handleSelect(label) }}
                >
                    <div className="w-3 flex justify-center shrink-0 text-kb-neutral-300">
                        <i className={` ${img} `}></i>
                    </div>

                    <div className="l3-b text-kb-neutral-300">{name}</div>

                </div>
            })}




        </div>
    )
}

export default ArticleOnwerOption
