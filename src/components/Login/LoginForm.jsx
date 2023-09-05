import React from 'react'
import KB from '../../assets/image/KB.jpg'
import LoginBtn from '../button/LoginBtn'
import LoginKeyCloakBtn from '../button/LoginKeyCloakBtn'
import Eye from '../../assets/icon/eye.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import useLogin from '../../services/auth/useLogin'
import { signInSchema } from '../../vadidations/auth.schema'

function LoginForm() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        resolver: yupResolver(signInSchema),
    })
    const { logIn, error } = useLogin()
    const onSubmit = (data) => {
        logIn(data)
        reset({ username: '', password: '' })
    }

    return (
        <div className=" flex flex-col 2xl:gap-[38px] md:gap-[26.98px] 2xl:p-[52px] md:p-[36.92px] md:w-[29rem] 2xl:w-[40.75rem] h-auto 2xl:rounded-[20px] md:rounded-[14.2px] kb-shadow-white-bg ">
            <div className=" flex items-center justify-center md:gap-[0.46rem] 2xl:gap-[0.652rem]">
                < img
                    src={KB}
                    className="2xl:w-[84px] 2xl:h-[84px] md:w-[60px] md:h-[60px] bg-kb-primary-gradient rounded-full"
                />
                <h1>
                    <span className="text-kb-second-color">Know</span>
                    <span className="kb-text-primary-gradient">Base</span>
                </h1>

            </div>



            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex 2xl:h-[31.5rem] md:h-[22.4rem] flex-col items-center 2xl:gap-[2.125rem] md:gap-[1.51rem] self-stretch">

                <div>
                    <h1 className="text-kb-second-color">Welcome to KnowBase</h1>
                    <div className="2xl:kb-font-thin md:kb-font-thin-md">Learn other - Grow faster</div>
                </div>

                <div className="flex flex-col justify-end items-start 2xl:gap-3 md:gap-2 self-stretch">
                    <div className="l3-r text-red-700 flex  items-center">
                        <label className="l3-r text-kb-neutral-500">Username</label>
                        {errors?.username?.message && <span className="ml-64">{errors?.username?.message}</span>}
                        {error && !errors?.username?.message && <span className="ml-40">{error?.error_description}</span>}

                    </div>



                    <input
                        name='username'
                        {...register('username')}
                        className="flex 2xl:h-12 md:h-9 items-center 2xl:gap-1 md:gap-[2.84px] self-stretch 2xl:p-4 md:p-[2.84px] border 2xl:rounded-lg md:rounded-[5.68px] border-solid border-[#CBD2E0]" type="text" />
                </div>

                <div className="flex relative flex-col justify-end items-start gap-3 self-stretch">
                    <div className="l3-r text-red-700 flex justify-between  items-center">
                        <label className="l3-r text-kb-neutral-500">Password</label>
                        {errors?.password?.message && <span className="ml-64">{errors?.password?.message}</span>}
                        {error && !errors?.password?.message && <span className="ml-40">{error?.error_description}</span>}

                    </div>
                    <input
                        name='password'
                        {...register('password')}
                        className="flex 2xl:p-4 md:p-[2.84px]  2xl:h-12 md:h-9 justify-between items-center 2xl:gap-1 md:gap-[2.84px] self-stretch border 2xl:rounded-lg md:rounded-[5.68px] border-solid border-[#CBD2E0]"
                        type="text"
                    />
                    <img className="absolute cursor-pointer 2xl:right-4 2xl:w-5 2xl:h-4 2xl:bottom-4 md:right-3 md:w-3 md:h-3 md:bottom-3" src={Eye} />


                </div>

                <div className="flex 2xl:gap-[0.375rem] md:gap-[0.27rem] justify-start items-center self-stretch text-kb-neutral-500">
                    <input
                        className=" 2xl:w-5 2xl:h-5 md:w-4 md:h-4"
                        type="checkbox"
                        name=""
                    />
                    <div className="l4-r 2xl:w-[8.5rem] md:w-[6.3rem] shrink-0">Remember me</div>
                </div>

                <LoginKeyCloakBtn />
            </form>
            <LoginBtn />

        </div>
    )
}

export default LoginForm
