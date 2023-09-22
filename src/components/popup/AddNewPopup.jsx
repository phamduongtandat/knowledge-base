import { useEffect, useState } from 'react'
import Folder from '../../assets/image/folder.png'


import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { folderSchema, fileSchema } from '../../vadidations/content.schema';
import { useLocation } from 'react-router-dom';
import checkLogin from './../../utils/checkLogin';
import useCreateContent from './../../services/home/useCreateContent';
import { useDispatch, useSelector } from 'react-redux';
import { addContentPopup } from '../../redux/popupSlice';
import useGetUserID from '../../services/auth/useGetUserID';
import useUploadFile from '../../services/home/useUploadFile';

function AddNewPopup() {


    //const { isOpenAdd, setIsOpenAdd } = useContext(AddPopupContext)
    const isOpenAdd = useSelector(state => state.popup.isAddContent)
    const dispatch = useDispatch()

    const [isCateg, setIsCateg] = useState(true)
    //const [isName, setIsName] = useState(false)
    const { pathname } = useLocation()
    const parentID = pathname?.split('/').pop()

    console.log(' parentID:', parentID)
    if (parentID) {
        console.log('hello')
    }

    const { createContent, errorC } = useCreateContent()

    const { register, handleSubmit, watch, setFocus, formState: { errors } } = useForm({
        resolver: yupResolver((!isCateg || isOpenAdd === 3) ? fileSchema : folderSchema),
    })

    console.log('isOpenAdd :', isOpenAdd)
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const onSubmit = (data) => {

        data.type = 'folder'
        data.parentId = parentID
        data.userId = userID
        createContent(data)
        console.log('data :', data)

    }


    const { uploadFile } = useUploadFile(userID, parentID)
    const onUpload = (data) => {
        console.log('fileData :', data?.file[0])
        const formData = new FormData();
        formData.append("file", data?.file[0]);
        uploadFile(formData)
    }
    console.log('watch :', watch('file'))
    console.log('errors :', errors)

    useEffect(() => {
        if (isOpenAdd === 1) {
            setFocus('name')
        }
    }, [])

    return (
        <div
            id='addBackDrop'
            onClick={({ target }) => {

                if (target.id === 'addBackDrop') {
                    dispatch(addContentPopup(0))
                }
            }}
            className="bg-kb-neutral-700/50 fixed z-50 inset-0"
        >
            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-start gap-1.5 p-4 rounded-[0.5rem] kb-shadow-white-bg">


                {/* TITLE ADD */}
                <div className={`flex items-start justify-center gap-1.5 px-3.5 py-1.5 rounded-[3.4rem] bg-kb-primary-color`}>

                    <div
                        onClick={() => { setIsCateg(true); dispatch(addContentPopup(1)) }}
                        className={`flex flex-col items-start gap-1.5 px-3.5 py-1.5 rounded-[3.4rem]  cursor-pointer 
                        ${isCateg && isOpenAdd === 1 ? 'bg-kb-neutral-white text-kb-primary-color' : 'text-kb-neutral-white'}`}
                    >

                        <div className="flex justify-center items-center gap-1.5 rounded-[0.4rem]">

                            <i className="fa-solid fa-folder-plus fa-sm flex flex-col justify-center items-center gap-1.5 text-kb-primary-color"></i>
                            <div className="l3-b ">New Category</div>
                        </div>
                    </div>

                    {parentID && <div
                        onClick={() => { setIsCateg(false); dispatch(addContentPopup(3)) }}
                        className={`flex flex-col items-start gap-1.5 px-3.5 py-1.5 rounded-[3.4rem] cursor-pointer
                        ${(!isCateg || isOpenAdd === 3) ? 'bg-kb-neutral-white text-kb-primary-color' : 'text-kb-neutral-white'}`}

                    >
                        <div className="flex justify-center items-center gap-1.5 rounded-[0.4rem] ">
                            <i className="fa-solid fa-upload fa-sm"></i>
                            <div className="l3-b ">New file</div>
                        </div>
                    </div>}
                </div>


                {/* NEW FILE */}
                {(!isCateg || isOpenAdd === 3)
                    && <form
                        onSubmit={handleSubmit(onUpload)}
                        className="flex flex-col justify-center items-center gap-8 self-stretch pt-[2rem] pb-3.5 px-0 rounded-md mt-2 border-2 border-dashed border-kb-primary-color "
                    >

                        <div className=" flex justify-center items-center w-[2rem] h-[1rem] text-kb-primary-color">
                            <i className="fa-solid fa-upload fa-2xl "></i>
                        </div>

                        <label className="flex flex-col justify-center items-center gap-1.5 self-stretch">

                            {!watch('file')?.[0]?.name && <div className="l3-b cursor-pointer hover:text-blue-500 text-kb-neutral-300">Upload your file here</div>}

                            {!!watch('file')?.[0]?.name && <div className="l3-b cursor-pointer hover:text-blue-500 text-kb-neutral-300">Change upload here</div>}

                            {!!errors?.file?.message && <div className="italic text-red-500 ">
                                {errors?.file?.message}
                            </div>}

                            {!!watch('file')?.[0]?.name && <div className="italic text-green-500 ">
                                <span className="text-kb-second-color">Đã chọn: </span>
                                {watch('file')?.[0]?.name}
                            </div>}

                            <input
                                name='file'
                                hidden
                                type="file"
                                {...register('file', { required: 'No file' })}
                            />
                        </label>



                        <div className="flex flex-col items-start gap-1.5 self-stretch pt-3.5 pb-0 px-14 ">
                            <button
                                type='submit'
                                className="flex justify-center items-center gap-1.5 self-stretch px-1.5 py-3 rounded-lg bg-kb-primary-gradient">
                                <div className="l3-b kb-text-shadow-lg">Create</div>
                            </button>
                        </div>
                    </form>}


                {/* NEW CATEGORY */}
                {isCateg && isOpenAdd === 1 && <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col justify-center items-center gap-2.5 self-stretch pt-[2.625rem] pb-5 px-0">
                        <img className="w-[3.85rem] h-[2.71rem]" src={Folder} />
                    </div>
                    {<div className="text-center italic text-red-700">{errorC === 'duplicate-name' ? 'This name is existed' : ''}</div>}
                    <div className="flex justify-center items-center gap-2.5 self-stretch px-0 py-2.5 text-kb-second-color">
                        {/* {!isName && <div className="l1-b text-kb-second-color">Your category name</div>} */}
                        {<input name='name' {...register('name')} className="border-2 pl-2 w-52 rounded-md outline-none" />}
                        <i
                            //onClick={() => { setIsName(!isName) }}

                            className="fa-solid fa-pen-to-square fa-lg"></i>
                    </div>

                    <div className={`flex flex-col items-start gap-1.5 self-stretch pt-3.5 pb-0 px-14  `}>
                        <button
                            type='submit'
                            className={`${errors?.name?.message || !watch('name') ? 'cursor-not-allowed' : ''}  flex justify-center items-center gap-1.5 self-stretch px-1.5 py-3 rounded-lg bg-kb-primary-gradient`}>
                            <div className="l3-b kb-text-shadow-lg">Create</div>
                        </button>
                    </div>
                </form>}


            </div>

        </div>
    )
}

export default AddNewPopup
