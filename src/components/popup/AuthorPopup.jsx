import { useDispatch, useSelector } from "react-redux"
import { getAuthor } from "../../redux/popupSlice"

import UserAva from '../../assets/image/userava.png'
import useGetUserDetail from "../../services/auth/useGetUserDetail"
import formatDate from "../../utils/formatDate"
function AuthorPopup() {

    const dispatch = useDispatch()
    const userName = useSelector(state => state.popup.itemInfo)
    const { userDetail } = useGetUserDetail(userName)
    return (
        <div
            id='addBackDrop'
            onClick={({ target }) => {

                if (target.id === 'addBackDrop') {
                    dispatch(getAuthor(false))
                }
            }}
            className=" fixed z-50 left-0 top-0 inset-0 bg-kb-neutral-500/20">

            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-start md:gap-[1.6875rem] md:p-[1.875rem] md:w-[37rem] h-fit rounded-xl   2xl:gap-[2.4rem] 2xl:p-[2.6rem] 2xl:w-[52rem] bg-kb-neutral-white">

                <div className="flex justify-center items-center gap-[1.125rem] self-stretch">

                    <h2 className="kb-text-primary-gradient flex-1 truncate">Author Infomation</h2>
                    <div
                        onClick={() => { dispatch(getAuthor(false)) }}
                        className="flex justify-end items-center gap-[0.46875rem]">
                        <div className="flex justify-center items-center gap-[0.46875rem] p-[0.70313rem] rounded-[2.39063rem] bg-kb-neutral-white cursor-pointer">
                            <i className="fa-solid fa-xmark fa-lg"></i>
                        </div>
                    </div>
                </div>

                <div className="flex items-center  2xl:gap-5 md:gap-[0.9rem] self-stretch ">

                    <div className="flex flex-col justify-center items-center 2xl:gap-[1.125rem] md:gap-[0.8rem]">

                        <img className="2xl:w-[11.4375rem] 2xl:h-[11.4375rem] rounded 2xl:border-2 md:w-[8.1rem] md:h-[8.1rem] md:border border-kb-primary-color bg-kb-neutral-white" src={UserAva} />



                    </div>

                    <div className="flex items-start flex-[1_0_0] 2xl:gap-8 2xl:pt-[60px] md:gap-[1.42rem] md:pt-[42.6px]">

                        <div className="flex flex-col justify-center items-start flex-[1_0_0] text-kb-second-color">
                            <div className="flex items-center content-center 2xl:gap-2 md:gap-[0.355rem] self-stretch flex-wrap">
                                <h1>{userDetail?.name}</h1>
                            </div>
                            <div className="l2-r">Developer</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start 2xl:gap-5 md:gap-[0.9rem] self-stretch">

                    <div className="flex justify-between items-center self-stretch">

                        <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                            <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Personal ID</h4>
                            <h4 className="text-kb-second-color ">{userDetail?.id}</h4>
                        </div>

                    </div>

                    <div className="w-full border border-kb-neutral-50 border-opacity-20"></div>


                    {/* EMAIL */}
                    <div className="flex justify-between items-center self-stretch">

                        <div className="flex items-center 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                            <h4 className=" text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Email</h4>

                            <h4 className="text-kb-second-color ">{userDetail?.email || 'demo@gmail.com'}</h4>
                        </div>




                    </div>

                    <div className="w-full border border-kb-neutral-50 border-opacity-20"></div>

                    {/* PHONE */}
                    <div className="flex justify-between items-center self-stretch">

                        <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                            <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Phone</h4>
                            <h4 className="text-kb-second-color ">{userDetail?.phone || '09xxxxxxxx'} </h4>
                        </div>





                    </div>


                    <div className="w-full border border-kb-neutral-50 border-opacity-20"></div>

                    {/* dob */}
                    <div className="flex justify-between items-center self-stretch">
                        <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                            <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">dob</h4>
                            <h4 className="text-kb-second-color ">{userDetail?.dob ? formatDate(userDetail?.dob, true) : 'dd/mm/yyyy'}</h4>
                        </div>

                    </div>

                    <div className="w-full border border-kb-neutral-50 border-opacity-20"></div>

                    <div className="flex justify-between items-center self-stretch">

                        <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                            <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Start at</h4>
                            <h4 className="text-kb-second-color ">{userDetail?.createAt ? formatDate(userDetail?.createAt, true) : 'dd/mm/yyyy'}</h4>
                        </div>

                    </div>

                    <div className="w-full border border-kb-neutral-50 border-opacity-20"></div>
                    <div className="flex justify-between items-center self-stretch">

                        <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                            <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Article</h4>
                            <h4 className="text-kb-second-color ">
                                {userDetail?.quantityArticle || 0}
                            </h4>
                        </div>

                    </div>







                </div>













            </div>

        </div>
    )
}

export default AuthorPopup
