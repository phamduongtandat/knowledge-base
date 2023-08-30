import { useState, useEffect } from 'react'
import MenuLayout from './MenuLayout'
import SearchLayout from './SearchLayout';
import { Outlet } from "react-router-dom";
import ProfileOption from '../myProfile/ProfileOption';
import checkLogin from '../../utils/checkLogin';
import { useNavigate } from 'react-router-dom';
import useGetUserID from '../../services/auth/useGetUserID';
import { useDispatch } from 'react-redux';
import { getUserId } from '../../redux/authSlice';
function MainLayout() {

    const { isLogin, tokenInfo } = checkLogin()
    //const { userID } = useGetUserID(tokenInfo?.preferred_username)

    //console.log('userID :', userID)
    const navigate = useNavigate();
    const [isDrop, setIsDrop] = useState(false)
    useEffect(() => {
        if (!isLogin) navigate('/login')
    }, [isLogin])

    return (
        <>
            {isLogin && <div className="flex w-full items-start ">

                <MenuLayout />

                <div className="flex flex-col items-start flex-[1_0_0] self-stretch">

                    {/* HEADER */}
                    <div className="flex justify-end items-center gap-3 self-stretch pt-[2.625rem] pb-[2.8125rem] px-[1.6875rem]">

                        <SearchLayout />

                        <div className="flex justify-end items-center gap-[0.46875rem] px-[0.5625rem] py-0">
                            <i className="fa-solid fa-bell fa-lg flex w-7 h-7 justify-center items-center gap-[0.46875rem] kb-text-primary-gradient"></i>
                        </div>

                        <div className="w-[0.1875rem] self-stretch rounded-[4.64063rem] bg-kb-neutral-50" />

                        <div className=" relative flex justify-end items-center gap-3">
                            <h3 className="text-kb-second-color">{tokenInfo?.name}</h3>
                            <img
                                onClick={() => { setIsDrop(!isDrop) }}
                                className="w-12 h-12 rounded-full border-2 cursor-pointer border-kb-primary-color" src="https://via.placeholder.com/48x48" />
                            {isDrop && <div className="absolute top-14 z-10 min-w-[135px] ">
                                <ProfileOption />
                            </div>}
                        </div>

                    </div>

                    {/* CONTENT */}
                    <div className="w-full">
                        {isLogin && <Outlet />}
                    </div>


                </div>
            </div>}

        </>

    )
}

export default MainLayout
