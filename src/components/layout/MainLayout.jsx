import { useState, useEffect, useRef } from 'react'
import MenuLayout from './MenuLayout'
import SearchLayout from './SearchLayout';
import { Outlet } from "react-router-dom";
import ProfileOption from '../myProfile/ProfileOption';
import checkLogin from '../../utils/checkLogin';
import { useNavigate } from 'react-router-dom';
import UserAva from '../../assets/image/userava.png'
import { useDispatch, useSelector } from 'react-redux';
import { turnOnArtOpt, turnOnFiletOpt, turnOnOpt } from '../../redux/optionSlice';


function MainLayout() {

    const refOpt = useRef(null)
    const handOutside = (e) => {

        if (refOpt.current && !refOpt.current.contains(e.target)) {
            setIsDrop(false)
        }
    }

    useEffect(() => {

        document.addEventListener('click', handOutside)
        return () => { document.removeEventListener('click', handOutside) }

    }, [])


    const dispatch = useDispatch()
    const { isLogin, tokenInfo } = checkLogin()
    //const { userID } = useGetUserID(tokenInfo?.preferred_username)

    //console.log('userID :', userID)
    const navigate = useNavigate();
    const [isDrop, setIsDrop] = useState(false)
    useEffect(() => {
        if (!isLogin) navigate('/login')
    }, [isLogin])

    const isDummmyMainMenu = useSelector(state => state.globalUX.isDummmyMainMenu)

    return (
        <>
            {isLogin && <div className="flex w-full items-start ">
                <div className="fixed z-40">
                    <MenuLayout />
                </div>
                <div className={`invisible ${isDummmyMainMenu ? '2xl:w-[16.1rem] md:w-[11.431rem]' : '2xl:w-[7.75rem] md:w-[5.5rem]'}    `}>

                </div>


                <div
                    id='mainBackground'
                    onClick={({ target }) => {
                        if (target.id === 'mainBackground') {
                            dispatch(turnOnOpt(false))
                            dispatch(turnOnArtOpt(false))
                            dispatch(turnOnFiletOpt(false))
                            console.log('target.id :', target.id)
                        }
                    }}
                    className="flex flex-col items-start flex-[1_0_0] self-stretch"
                >

                    {/* HEADER */}
                    <div
                        id='mainHeader'
                        onClick={({ target }) => {
                            if (target.id === 'mainHeader') {
                                dispatch(turnOnOpt(false))
                                dispatch(turnOnArtOpt(false))
                                dispatch(turnOnFiletOpt(false))
                            }
                        }}


                        className="flex justify-end items-center gap-3 self-stretch pt-[2.625rem] pb-[2.8125rem] px-[1.6875rem]">

                        <SearchLayout />

                        <div className="flex justify-end items-center gap-[0.46875rem] px-[0.5625rem] py-0">
                            <i className="fa-solid fa-bell fa-lg flex w-7 h-7 justify-center items-center gap-[0.46875rem] kb-text-primary-gradient"></i>
                        </div>

                        <div className="w-[0.1875rem] self-stretch rounded-[4.64063rem] bg-kb-neutral-50" />

                        <div className=" relative flex justify-end items-center gap-3">
                            <h3 className="text-kb-second-color">{tokenInfo?.name}</h3>
                            <img
                                ref={refOpt}
                                onClick={() => { setIsDrop(!isDrop); console.log(isDrop) }}
                                className="w-12 h-12 rounded-full border-2 cursor-pointer border-kb-primary-color" src={UserAva} />
                            {isDrop && <div className="absolute top-14 z-10 min-w-[135px] ">
                                <ProfileOption setIsDrop={setIsDrop} />
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
