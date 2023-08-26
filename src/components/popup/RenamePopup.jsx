import Folder from '../../assets/image/folder.png'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { folderSchema } from '../../vadidations/content.schema';

import useRename from '../../services/option/useRename';
import checkLogin from '../../utils/checkLogin';
import { useDispatch, useSelector } from 'react-redux';
import { renamePopup } from '../../redux/popupSlice';


function RenamePopup() {
    //const { setIsRename, itemName } = useContext(AddPopupContext)
    const itemInfo = useSelector(state => state.popup.itemInfo)
    const dispatch = useDispatch()

    const { register, handleSubmit, } = useForm({
        defaultValues: { name: itemInfo?.name },
        resolver: yupResolver(folderSchema),
    })

    const { renameContent } = useRename(itemInfo?.id)
    const { tokenInfo } = checkLogin()
    const handleRename = (data) => {
        data.userId = tokenInfo?.userID
        console.log('data :', data)
        renameContent(data)

    }

    return (
        <div
            id='addBackDrop'
            onClick={({ target }) => {

                if (target.id === 'addBackDrop') {
                    //setIsRename(false)
                    dispatch(renamePopup(false))
                }
            }}
            className="bg-kb-neutral-700/50 fixed z-50 inset-0"
        >


            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-start gap-1.5 p-4 rounded-[0.5rem] kb-shadow-white-bg">
                <div className="flex justify-center items-center gap-1.5 rounded-[0.4rem] ">

                    <div className="l3-b ">Rename</div>
                </div>

                <form onSubmit={handleSubmit(handleRename)}>
                    <div className="flex flex-col justify-center items-center gap-2.5 self-stretch pt-[2.625rem] pb-5 px-0">
                        <img className="w-[3.85rem] h-[2.71rem]" src={Folder} />
                    </div>

                    <div className="flex justify-center items-center gap-2.5 self-stretch px-0 py-2.5 text-kb-second-color">
                        <input name='name' {...register('name')} className="border-2 pl-2" />

                    </div>

                    <div className={`flex flex-col items-start gap-1.5 self-stretch pt-3.5 pb-0 px-14  `}>
                        <button
                            type='submit'
                            className={` flex justify-center items-center gap-1.5 self-stretch px-1.5 py-3 rounded-lg bg-kb-primary-gradient`}>
                            <div className="l3-b kb-text-shadow-lg">Done</div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default RenamePopup
