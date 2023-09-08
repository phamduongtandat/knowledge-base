
import { useDispatch } from "react-redux"
import { getInfo, movePopup, properPopup, renamePopup, sharePopup } from "../../redux/popupSlice"
import useMoveCategToBin from './../../services/option/useMoveCategToBin';
import checkLogin from "../../utils/checkLogin";



function CategogyOwnerOpt({ info, setCategOpt, titlePage }) {
    const { moveCategToBin } = useMoveCategToBin()

    const dispatch = useDispatch()
    const optionList = [

        { label: 1, name: 'Move to', img: 'fa-solid fa-arrows-up-down-left-right md:fa-sm 2xl:fa-xl' },
        { label: 2, name: 'Rename', img: 'fa-solid fa-pen-to-square md:fa-sm 2xl:fa-xl' },
        { label: 5, name: 'Share', img: 'fa-solid fa-share-nodes md:fa-sm 2xl:fa-xl' },
        { label: 3, name: 'Properties', img: 'fa-solid fa-info md:fa-sm 2xl:fa-xl' },
        { label: 4, name: 'Delete', img: 'fa-solid fa-trash-can md:fa-sm 2xl:fa-xl' },
    ]

    const { tokenInfo } = checkLogin()


    if (info?.author !== tokenInfo?.name && titlePage !== 'Shared history') {
        optionList?.splice(0, 3)
        optionList?.pop()
    }

    if (info?.author !== tokenInfo?.name && titlePage === 'Shared history') {
        optionList?.splice(0, 2)
        optionList?.pop()
    }

    const handleSelect = (label) => {
        console.log(' label:', label)
        if (label === 1) {
            //setItemName(name)
            dispatch(getInfo(info))
            dispatch(movePopup(true))
            return setCategOpt(pre => { return { ...pre, isOpen: false } })
        }
        if (label === 2) {
            //setItemName(name)
            dispatch(getInfo(info))
            dispatch(renamePopup(true))
            return setCategOpt(pre => { return { ...pre, isOpen: false } })
        }
        if (label === 3) {
            //setItemName(name)
            dispatch(getInfo(info))
            dispatch(properPopup(true))
            return setCategOpt(pre => { return { ...pre, isOpen: false } })
        }
        if (label === 4) {
            moveCategToBin(info?.id)
            return setCategOpt(pre => { return { ...pre, isOpen: false } })
        }

        if (label === 5) {
            dispatch(getInfo(info))
            dispatch(sharePopup(true))
            return setCategOpt(pre => { return { ...pre, isOpen: false } })

        }

    }

    return (
        <div className="relative kb-shadow-white-bg md:w-40 2xl:w-56 rounded-lg ">


            {optionList.map(({ label, name, img }) => {
                return <div
                    key={label}
                    className="flex  justify-start items-center md:gap-3 md:pl-7 md:py-3 2xl:gap-4 2xl:pl-10 2xl:py-4 rounded-lg cursor-pointer hover:bg-kb-neutral-50/50 "
                    onClick={() => { handleSelect(label) }}
                >
                    <div className="md:w-3 2xl:w-4 flex justify-center shrink-0 pb-1 text-kb-neutral-300">
                        <i className={` ${img} `}></i>
                    </div>

                    <div className="l3-b text-kb-neutral-300">{name}</div>

                </div>
            })}
        </div>






    )
}

export default CategogyOwnerOpt
