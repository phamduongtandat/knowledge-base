import { useDispatch } from "react-redux"
import useRevertBin from "../../services/bin/useRevertBin"
import { getInfo, terminatePopup } from "../../redux/popupSlice"



function BinOpt({ info }) {
    const optionList = [
        { label: 1, name: 'Recover', img: 'fa-solid fa-rotate-left fa-sm' },
        { label: 2, name: 'Delete', img: 'fa-solid fa-trash-can fa-sm' },
    ]

    const { revertBin } = useRevertBin()
    //const { terminateItem } = useTerminateItem()
    const dispatch = useDispatch()

    const handleSelect = (label) => {
        if (label === 1) {
            revertBin(info?.id)
            return
        }

        if (label === 2) {
            dispatch(getInfo(info))
            dispatch(terminatePopup(true))
            //console.log('Đã integrate nhưng đợi confirmModal')
            //terminateItem(info?.id)
            return
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

export default BinOpt
