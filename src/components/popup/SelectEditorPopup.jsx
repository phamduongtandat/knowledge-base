import { useDispatch } from "react-redux"
import { selectEditorPopup } from "../../redux/popupSlice"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"


function SelectEditorPopup() {

    const dispatch = useDispatch()
    const [choice, setChoice] = useState('')
    const { pathname } = useLocation()
    const parentID = pathname?.split('/')?.pop()
    console.log('parentID :', parentID)
    const editorList = [
        { label: 'markdown', name: 'Markdown', img: 'fa-solid fa-code fa-2xl' },
        { label: 'wysiwyg', name: 'WYSIWYG', img: 'fa-solid fa-feather-pointed fa-2xl' },
    ]
    const handChoice = (label) => {
        console.log('label :', label)
        // if (label === 'markdown') {
        //     setChoice(label)
        // }
        setChoice(label)
    }

    console.log('choice :', choice)
    return (
        <div
            id='addBackDrop'
            onClick={({ target }) => {

                if (target.id === 'addBackDrop') {
                    dispatch(selectEditorPopup(false))
                }
            }}
            className="bg-kb-neutral-700/50 fixed z-50 inset-0"
        >

            <div className="flex flex-col items-start gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-xl  kb-shadow-white-bg">

                <div className="flex justify-center items-center gap-2.5 self-stretch px-0 py-2.5">
                    <div className="text-kb-second-color l1-b">Select your editor</div>
                </div>

                <div className={`flex justify-between gap-2 items-start self-stretch`}>

                    {editorList?.map(i => <div key={i?.label}
                        onClick={() => { handChoice(i?.label) }}
                        className={` flex flex-col justify-center items-center gap-2 w-[7.rem] h-[9.5rem] ${choice === i?.label ? 'text-kb-primary-color border-kb-primary-color' : 'text-kb-neutral-300'}`}
                    >


                        <div className={`relative w-[118px] h-[118px]  rounded-full border ${choice === i?.label ? ' border-kb-primary-color' : 'border-kb-neutral-300'}`}  >
                            <i className={`${i?.img} absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2  `}></i>
                        </div>
                        <div className=" w-[4.79063rem] text-center l4-b">{i?.name}</div>

                    </div>)}

                </div>

                <Link to={`/${choice}/write/${parentID}`} className="flex flex-col justify-center items-center gap-2.5 self-stretch pt-5 pb-0 px-5">
                    <div className="flex justify-center items-center gap-2.5 self-stretch px-2.5 py-4 rounded-lg bg bg-kb-primary-gradient">
                        <div
                            //onClick={()=>{}}
                            className="l3-b kb-text-shadow-lg">Create now</div>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default SelectEditorPopup
