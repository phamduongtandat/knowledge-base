import Catalogy from '../../assets/icon/catalogy.svg'
import Article from '../../assets/icon/article.svg'
import Upload from '../../assets/icon/upload.svg'
import { useDispatch } from 'react-redux'
import { addContentPopup, selectEditorPopup } from '../../redux/popupSlice'

function AddOption({ titlePage }) {
    const optionList = [
        { label: 1, name: 'New category', img: Catalogy },
        { label: 2, name: 'New article', img: Article },
        { label: 3, name: 'New file', img: Upload }
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

            <div className="kb-shadow-white-bg flex-col items-start  rounded-lg md:w-48  md:px-4  md:py-2.5 2xl:w-[17rem]  2xl:px-5  2xl:py-[0.9rem]">

                {optionList.map(({ label, name, img }) => {
                    return <div
                        key={label}
                        className="flex justify-start items-center md:gap-2.5 md:px-2 md:py-3 2xl:gap-3.5 2xl:px-3 2xl:py-4 rounded-lg cursor-pointer"
                        onClick={() => { handleSelect(label) }}
                    >

                        <img src={img} className=" md:w-5 md:h-[1.09375rem] 2xl:w-7 2xl:h-[1.55rem] shrink-0" />
                        <div className="l3-b text-kb-neutral-300">{name}</div>

                    </div>
                })}

            </div>


        </div>

    )
}

export default AddOption
