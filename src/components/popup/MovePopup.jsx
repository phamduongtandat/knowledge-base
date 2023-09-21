import { useDispatch, useSelector } from "react-redux"
import { movePopup } from "../../redux/popupSlice"
import Folder from "../../assets/image/folder.png";
import useGetHomePage from './../../services/home/useGetHomePage';
import { useState } from "react";
import useGetFolderContent from './../../services/folder/useGetFolderContent';
import useMoveTo from "../../services/option/useMoveTo";
import checkLogin from "../../utils/checkLogin";
import useGetUserID from "../../services/auth/useGetUserID";



function MovePopup() {
    let itemInfo = useSelector(state => state.popup.itemInfo)

    const [child, setChild] = useState([])


    const { moveTo } = useMoveTo(itemInfo?.id)
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)
    const { homePageContent } = useGetHomePage(userID, 'only-me')
    const { folderContent } = useGetFolderContent(userID, child?.id)
    const folder = child?.length !== 0
        ? folderContent?.filter(i => i.type === "folder" && i.name !== itemInfo?.name)
        : homePageContent?.filter(i => i.type === "folder" && i.name !== itemInfo?.name)


    const dispatch = useDispatch()

    console.log('folderContent :', folderContent)

    return (
        <div
            id='addBackDrop'
            onClick={({ target }) => {

                if (target.id === 'addBackDrop') {
                    dispatch(movePopup(false))
                }
            }}
            className="bg-kb-neutral-700/50 fixed z-50 inset-0"
        >



            <div className=" absolute flex flex-col h-[90%] w-[90%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-around  items-start gap-7 p-4 rounded-[0.5rem] kb-shadow-white-bg">


                <div className="flex justify-center items-center gap-[1.125rem] self-stretch">

                    <h2 className="text-kb-second-color flex-1">

                        Move {itemInfo?.name?.length >= 25 ? itemInfo?.name?.slice(0, 25) + '...' : itemInfo?.name} to {child?.name?.length >= 25 ? child?.name?.slice(0, 25) + '...' : child?.name || 'Home'}
                    </h2>

                    <div className="text-red-700/70 italic" >{itemInfo?.type !== 'folder' && !child?.name ? 'Home Page only accept Folder ' : ''}</div>
                    <div
                        onClick={() => { dispatch(movePopup(false)) }}
                        className="flex justify-end items-center gap-[0.46875rem]">
                        <div className="flex justify-center items-center gap-[0.46875rem] p-[0.70313rem] rounded-[2.39063rem] bg-kb-neutral-white cursor-pointer">
                            <i className="fa-solid fa-xmark fa-lg"></i>
                        </div>
                    </div>
                </div>

                {/* FOLDER */}
                <div className="flex flex-wrap  ml-7">
                    {folder?.map((i) => {
                        return (
                            <div
                                onClick={() => {

                                    setChild(i)
                                }}
                                key={i.id}
                                className={`flex min-w-[8rem]  h-[6rem] justify-center items-center p-[0.9375rem] rounded-md cursor-pointer`}
                                title={i?.name}
                            >

                                <div className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch">
                                    <div className="flex flex-col gap-2 justify-between items-start flex-[1_0_0]">
                                        <img className="w-12 h-[2.10938rem]" src={Folder} />

                                        <div className="flex flex-col items-start text-kb-second-color">
                                            <div className="l3-b truncate md:w-[100px] 2xl:w-[141px]">{i?.name}</div>
                                            <div className="l3-r">{i?.quantity} files</div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        );
                    })}

                </div>

                <div className=" w-full flex justify-around">

                    <div
                        onClick={() => { dispatch(movePopup(false)) }}
                        className="bg-kb-neutral-300/40 kb-text-shadow-sm flex justify-center items-center gap-[0.46875rem] px-6 py-[1rem] rounded-md cursor-pointer">

                        <div className="l3-b">Cancel</div>
                    </div>

                    <div
                        onClick={() => {

                            console.log('parentId :', child?.id)
                            const data = {

                                parentId: child?.id || '',
                                type: itemInfo?.type,
                                userId: userID

                            }
                            console.log('data :', data)
                            console.log('itemInfo?.id :', itemInfo?.id)
                            moveTo(data)
                        }}
                        className="bg-kb-primary-gradient kb-text-shadow-sm flex justify-center items-center gap-[0.46875rem] px-3 py-[1rem] rounded-md cursor-pointer">

                        <div className="l3-b">Move to here</div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default MovePopup
