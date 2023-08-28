
import { useDispatch } from "react-redux"
import { getInfo, movePopup, properPopup, renamePopup } from "../../redux/popupSlice"



function CategogyOwnerOpt({ info, setCategOpt }) {


    const dispatch = useDispatch()
    const optionList = [

        { label: 1, name: 'Move to', img: 'fa-solid fa-arrows-up-down-left-right fa-sm' },
        { label: 2, name: 'Rename', img: 'fa-solid fa-pen-to-square fa-sm' },
        { label: 3, name: 'Properties', img: 'fa-solid fa-info fa-sm' },
        { label: 4, name: 'Delete', img: 'fa-solid fa-trash-can fa-sm' },
    ]

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

export default CategogyOwnerOpt
