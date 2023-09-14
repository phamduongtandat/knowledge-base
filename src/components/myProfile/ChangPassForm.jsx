import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { updatePasswordSchema } from "../../vadidations/auth.schema";
import useGetUserDetail from './../../services/auth/useGetUserDetail';
import checkLogin from './../../utils/checkLogin';
import useChangePass from "../../services/auth/useChangePass";
import { useEffect } from "react";


function ChangPassForm() {



    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(updatePasswordSchema)
    })

    const { tokenInfo } = checkLogin()
    const { userDetail } = useGetUserDetail(tokenInfo?.preferred_username)
    const { changePass, isSuccessC } = useChangePass(userDetail?.userKey)
    console.log('userDetail :', userDetail)
    console.log('errorsCpass :', errors)

    const handChange = (data) => {
        console.log(' dataCPass:', data)
        const req = { type: "password", value: data?.newPassword, temporary: false }
        console.log('req :', req)
        changePass(req)
    }

    useEffect(() => {
        if (isSuccessC) {
            reset({ newPassword: '', newPasswordConfirm: '' })

        }
    }, [isSuccessC])

    return (
        <div className=" bg-kb-neutral-white flex items-start flex-[1_0_0] md:gap-[0.333rem] md:px-4 md:py-[2rem] md:rounded-[0.4rem] 2xl:gap-[0.46875rem] 2xl:px-6 2xl:py-[2.8125rem] 2xl:rounded-[0.5625rem] ">

            <form onSubmit={handleSubmit(handChange)} className="2xl:h-[18rem] md:h-[13.3rem] flex-[1_0_0]">

                <div className="flex flex-col items-start 2xl:w-[62.125rem] 2xl:gap-[1.125rem] 2xl:pl-[1.88rem] md:w-[44.1rem] md:gap-[0.8rem] md:pl-[1.34rem]">

                    <h2 className="text-kb-second-color self-stretch">Change password</h2>


                    <div className="flex flex-col items-start 2xl:gap-[0.9375rem] md:gap-[0.7rem] self-stretch">

                        {/* OLD PASS */}

                        {/* <div className="flex justify-between items-center self-stretch">

                            <div className="flex items-center justify-around 2xl:gap-[5.85938rem] md:gap-[4.2rem] flex-[1_0_0]">

                                <div className="l3-b text-kb-neutral-300 2xl:w-[12rem] md:w-[8rem]">Old password</div>

                                <input
                                    {...register('oldPassword')}
                                    className="border px-2 rounded-md outline-none" type='password' />
                                <span className="italic text-red-700 l3-r">require</span>
                            </div>
                        </div> */}

                        {/* <div className="2xl:w-[60.25rem] 2xl:h-[0.04688rem] md:w-[42.8rem] md:h-[0.0333rem]  bg-kb-neutral-50" /> */}

                        {/* NEW PASS */}

                        <div className="flex justify-between items-center self-stretch">

                            <div className="flex items-center justify-start 2xl:gap-[5.85938rem] md:gap-[4.2rem] flex-[1_0_0]">

                                <div className="l3-b text-kb-neutral-300 2xl:w-[12rem] md:w-[8rem]">New password</div>
                                <input
                                    {...register('newPassword')}
                                    className="border px-2 rounded-md outline-none" type='password' />
                                {errors?.newPassword && <span className="italic text-red-700 l3-r">{errors?.newPassword?.message}</span>}
                            </div>
                        </div>




                        {/* CONFIRM PASS */}
                        <div className="flex justify-start items-center self-stretch">

                            <div className="flex items-center justify-start 2xl:gap-[5.85938rem] md:gap-[4.2rem] flex-[1_0_0]">

                                <div className="l3-b text-kb-neutral-300 2xl:w-[12rem] md:w-[8rem]">Confirm password</div>
                                <input
                                    {...register('newPasswordConfirm')}
                                    className="border px-2 rounded-md outline-none" type='password' />
                                {errors?.newPasswordConfirm && <span className="italic text-red-700 l3-r">{errors?.newPasswordConfirm?.message}</span>}
                            </div>

                        </div>



                    </div>


                    <div className="flex flex-col items-end 2xl:gap-[0.46875rem] md:gap-[0.333rem] self-stretch">
                        {isSuccessC && <div className="italic l3-r text-green-400">Successfully Change Password!!! </div>}
                        <button
                            type="submit"
                            className="bg-kb-primary-gradient flex justify-center items-center 2xl:gap-[0.46875rem] 2xl:px-[0.46875rem] 2xl:py-3  rounded-md md:gap-[0.333rem] md:px-[0.333rem] md:py-2 ">
                            <div className="l3-b kb-text-shadow-lg">Save changes</div>
                        </button>
                    </div>

                </div>

            </form>
        </div>




    )
}

export default ChangPassForm
