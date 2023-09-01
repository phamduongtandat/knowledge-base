import { useDispatch, useSelector } from "react-redux"
import { sharePopup } from "../../redux/popupSlice"
import useGetSharedUsers from "../../services/option/useGetSharedUsers"

import { useState } from "react"
import useGetUserList from "../../services/userAccount/useGetUserList"
import checkLogin from "../../utils/checkLogin"
import useGetUserID from "../../services/auth/useGetUserID"



function ShareList() {
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)
    const itemInfo = useSelector(state => state.popup.itemInfo)
    const dispatch = useDispatch()
    const { sharedUsers } = useGetSharedUsers(itemInfo?.id)
    console.log('sharedUsers :', sharedUsers)
    //const mock = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]
    //const mock1 = [{ id: 1 },]
    const [keyParam, setKeyParam] = useState('')

    const { userList } = useGetUserList({ name: keyParam })
    console.log('userList :', userList)
    const [useIdShare, setUseIdShare] = useState([])

    const handleAddAcc = (acc) => {
        console.log('acc :', acc)
        const isDelAcc = useIdShare.some(i => i === acc)
        console.log('isDelAcc :', isDelAcc)
        if (isDelAcc) {
            const xAcc = useIdShare.filter(i => i !== acc)
            setUseIdShare(xAcc)

            return
        }
        setUseIdShare([...useIdShare, acc])


    }
    console.log('useIdShare :', useIdShare)
    return (
        <div
            id='addBackDrop'
            onClick={({ target }) => {

                if (target.id === 'addBackDrop') {
                    dispatch(sharePopup(false))
                }
            }}
            className="fixed left-0 top-0 inset-0 bg-kb-neutral-500/20">
            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex w-[26.67188rem] flex-col items-start gap-[1.6875rem] p-[1.875rem] rounded-xl bg-kb-neutral-white">

                <div className="flex justify-center items-center gap-[1.125rem] self-stretch">

                    <h2 className="kb-text-primary-gradient flex-1">Share {itemInfo.name}</h2>
                    <div
                        onClick={() => { dispatch(sharePopup(false)) }}
                        className="flex justify-end items-center gap-[0.46875rem]">
                        <div className="flex justify-center items-center gap-[0.46875rem] p-[0.70313rem] rounded-[2.39063rem] bg-kb-neutral-white cursor-pointer">
                            <i className="fa-solid fa-xmark fa-lg"></i>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-[0.28125rem] self-stretch">
                    <h3 className="text-kb-second-color ">Article link</h3>

                    <div className="flex justify-between items-center self-stretch p-[0.28125rem] rounded-md border">

                        <div className="flex items-center gap-[0.5625rem] flex-[1_0_0] pl-[0.56rem] text-kb-neutral-100">
                            <i className="fa-solid fa-link fa-sm"></i>
                            <div className="p1-b ">/share/content/{itemInfo?.id}</div>
                        </div>

                        <div className="bg-kb-primary-gradient kb-text-shadow-sm flex justify-center items-center gap-[0.46875rem] px-1.5 py-[0.5625rem] rounded-md cursor-pointer">
                            <i className="fa-solid fa-copy fa-sm"></i>
                            <div className="l4-b">Copy</div>
                        </div>

                    </div>
                </div>


                <div className="self-stretch h-[255.50px] flex-col justify-start items-start gap-[9px] flex">


                    {/* INVITE FORM */}
                    <div className="flex flex-col items-start gap-[0.28125rem] self-stretch">
                        <h3 className="text-kb-second-color ">Invite friend to see</h3>

                        <div className="flex justify-between items-center self-stretch p-[0.28125rem] rounded-md border">

                            <div className="flex h-full items-center gap-[0.5625rem] flex-[1_0_0] pl-[0.56rem] ">
                                <i className="fa-solid fa-magnifying-glass fa-sm text-kb-neutral-100"></i>
                                <input
                                    value={keyParam}
                                    onChange={({ target }) => {
                                        setKeyParam(target.value)

                                    }}
                                    className="p1-b pl-2 outline-none w-full h-full " placeholder='Friend name' />
                            </div>

                            <div
                                onClick={() => {
                                    const data = {
                                        useIdShare,
                                        userId: userID
                                    }
                                    console.log('dataSend :', data)
                                    setKeyParam('')
                                }}
                                className="bg-kb-primary-gradient kb-text-shadow-sm flex justify-center items-center gap-[0.46875rem] px-1.5 py-[0.5625rem] rounded-md cursor-pointer">
                                <i className="fa-solid fa-paper-plane fa-sm"></i>
                                <div className="l4-b">Invite</div>
                            </div>

                        </div>

                        {/* //       _____ ACC LIST _____  */}
                        {keyParam && <div className="self-stretch min-h-fit h-fit max-h-52 rounded-md flex-col justify-start items-start gap-[9px] flex px-2 bg-kb-background">

                            {/* SHOW ADDED ACC */}
                            {useIdShare?.length !== 0 && <div className="mt-2 flex flex-wrap w-full h-fit   gap-2.5 p-2 border rounded-lg bg-kb-neutral-white  overflow-y-scroll small-scrollbar">

                                {useIdShare?.map(i => <div key={i} className="flex bg-kb-text-background h-7 items-center  gap-2 rounded px-2">
                                    <div className="l4-b kb-text-primary-gradient">Oracle</div>
                                    <i className="fa-solid fa-xmark fa-sm cursor-pointer text-kb-neutral-300/50 "></i>
                                </div>)}

                            </div>}

                            <div className="overflow-y-scroll  self-stretch small-scrollbar">
                                {userList?.map((i) => {
                                    return <div key={i?.id} className=" flex items-center gap-[0.46875rem] self-stretch ">
                                        <div className="flex items-center gap-[0.46875rem] flex-[1_0_0]">
                                            <img className="w-6 h-6 rounded-3xl border-yellow-300" src="https://via.placeholder.com/24x24" />

                                            <div className="flex flex-col justify-center items-start self-stretch">
                                                <div className="flex flex-col justify-center items-center">
                                                    <div className="self-stretch text-kb-second-color p2-b">{i?.name}</div>
                                                </div>

                                            </div>

                                        </div>

                                        <div

                                            className="flex justify-center items-center gap-[0.46875rem] p-[0.70313rem] text-kb-neutral-300">
                                            <div
                                                onClick={() => { handleAddAcc(i?.id) }}
                                                className="cursor-pointer"
                                            >

                                                {useIdShare?.some(item => item === i?.id) ? <i className="fa-solid fa-check fa-sm text-green-500"></i>
                                                    : <i className="fa-regular fa-square fa-sm"></i>}
                                            </div>
                                        </div>

                                    </div>
                                })}


                            </div>

                        </div>}

                        {/* //       _____  _____  */}

                    </div>


                    {/* SHARED LIST */}
                    <div className="overflow-y-scroll self-stretch small-scrollbar">
                        {sharedUsers?.map((i) => {
                            return <div key={i} className=" flex items-center gap-[0.46875rem] self-stretch ">
                                <div className="flex items-center gap-[0.46875rem] flex-[1_0_0]">
                                    <img className="w-6 h-6 rounded-3xl border-yellow-300" src="https://via.placeholder.com/24x24" />

                                    <div className="flex flex-col justify-center items-start self-stretch">
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="self-stretch text-kb-second-color p2-b">{sharedUsers?.userName}</div>
                                        </div>
                                        <div className="p3-r text-kb-neutral-300">Send at June 22, 2023</div>
                                    </div>

                                </div>

                                <div className="flex justify-center items-center gap-[0.46875rem] p-[0.70313rem] text-kb-neutral-300">
                                    <div title="REMOVE" className="cursor-pointer">
                                        <i className="fa-solid fa-xmark fa-sm"></i>
                                    </div>
                                </div>

                            </div>
                        })}


                    </div>



                </div>
            </div>

        </div>


    )
}

export default ShareList
