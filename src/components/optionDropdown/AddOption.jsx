import Catalogy from '../../assets/icon/catalogy.svg'
import Article from '../../assets/icon/article.svg'
import Upload from '../../assets/icon/upload.svg'
import { useDispatch } from 'react-redux'
import { addContentPopup, selectEditorPopup } from '../../redux/popupSlice'

function AddOption() {
    const optionList = [
        { label: 1, name: 'New category', img: Catalogy },
        { label: 2, name: 'New article', img: Article },
        { label: 3, name: 'New file', img: Upload },

    ]


    const dispatch = useDispatch()


    const handleSelect = (label) => {
        if (label === 2) {
            dispatch(selectEditorPopup(true))
            return dispatch(addContentPopup(0))
        }

        dispatch(addContentPopup(label))
    }

    return (
        <div>

            <div className="kb-shadow-white-bg w-48 flex-col px-4 items-start  py-2.5 rounded-lg">

                {optionList.map(({ label, name, img }) => {
                    return <div
                        key={label}
                        className="flex  justify-start items-center gap-2.5 px-2 py-3 rounded-lg cursor-pointer"
                        onClick={() => { handleSelect(label) }}
                    >

                        <img src={img} className=" w-5 h-[1.09375rem] shrink-0" />
                        <div className="l3-b text-kb-neutral-300">{name}</div>

                    </div>
                })}

            </div>


        </div>

    )
}

export default AddOption
