import React, { useEffect } from 'react'
import LoginBg from '../assets/image/login-bg.svg'
import LogoCompany from '../assets/image/login-hiptechLogo.png'
import LoginImg from '../assets/image/login-img.png';
import LoginForm from '../components/Login/LoginForm'
import checkLogin from '../utils/checkLogin';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const { isLogin } = checkLogin()
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) navigate('/')
    }, [isLogin])

    return (
        <div
            className="flex justify-evenly items-center bg-cover bg-center h-screen w-screen"
            style={{ backgroundImage: `url(${LoginBg})` }}
        >
            <div className="relative">
                <div className='2xl:w-[19.75rem] md:w-[14rem] 2xl:h-16 md:h-11'></div>
                <img className='absolute md:-left-[10rem] md:-top-[0rem] 2xl:-left-[14rem] 2xl:-top-[3rem] 2xl:w-[19.75rem] md:w-[14rem] 2xl:h-16 md:h-11 object-cover' src={LogoCompany} />
                <img className="2xl:w-[36.625rem] md:w-[26rem] 2xl:h-[43.18431rem] md:h-[30.7rem]" src={LoginImg} />
            </div>
            <LoginForm />
        </div>

    )
}

export default LoginPage
