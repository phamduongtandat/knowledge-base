import { useState } from 'react'
import bgProfile from '../../assets/image/bg-profile.png'
import Pen from '../../assets/icon/Pen.png'
import UserAva from '../../assets/image/userava.png'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { profileSchema } from '../../vadidations/profile.schema'

function PersonalInfo() {
    let mock = { email: 'em@gmail.com', phone: '0374146027', birth: "1992-02-20" }
    const [isEdit, setIsEdit] = useState({ email: false, phone: false, birth: false })
    const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(profileSchema),
        defaultValues: mock
    })

    const handleSave = (dataF) => {
        const data = { ...mock, ...dataF }
        console.log('saveData :', data)
    }


    console.log('proErrors:', errors)

    return (
        <div className="flex flex-col h-fit items-start 2xl:gap-2.5 md:gap-[0.444rem] self-stretch flex-grow">

            <div className=" bg-kb-neutral-white flex flex-col items-start self-stretch 2xl:px-8 2xl:py-[3.75rem] 2xl:rounded-xl 2xl:h-[60rem] md:px-[1.42rem] md:py-[2.7rem] md:rounded-[0.5325rem] md:h-[41.6rem]">

                <div className="relative w-full">
                    <img className="w-full shrink-0 2xl:h-[15.8125rem] 2xl:rounded-[0.625rem] md:h-[11.23rem] md:rounded-[0.444rem]" src={bgProfile} />

                    <form
                        onSubmit={handleSubmit(handleSave)}
                        className=" flex absolute w-full flex-col items-start 2xl:top-[10.69rem] 2xl:gap-6 2xl:pl-[2.5rem] md:top-[7.6rem] md:gap-[1.1rem] md:pl-[1.8rem] ">

                        <div className="flex items-center  2xl:gap-5 md:gap-[0.9rem] self-stretch ">

                            <div className="flex flex-col justify-center items-center 2xl:gap-[1.125rem] md:gap-[0.8rem]">

                                <img className="2xl:w-[11.4375rem] 2xl:h-[11.4375rem] rounded 2xl:border-2 md:w-[8.1rem] md:h-[8.1rem] md:border border-kb-primary-color bg-kb-neutral-white" src={UserAva} />

                                <div className="flex items-start 2xl:gap-[1.0625rem] md:gap-[0.75rem] l4-b text-kb-primary-color">
                                    <div >Change</div>
                                    <div >Delete</div>
                                </div>

                            </div>

                            <div className="flex items-start flex-[1_0_0] 2xl:gap-8 2xl:pt-[60px] md:gap-[1.42rem] md:pt-[42.6px]">

                                <div className="flex flex-col justify-center items-start flex-[1_0_0] text-kb-second-color">
                                    <div className="flex items-center content-center 2xl:gap-2 md:gap-[0.355rem] self-stretch flex-wrap">
                                        <h1>Username</h1>
                                    </div>
                                    <div className="l2-r">Developer</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start 2xl:gap-5 md:gap-[0.9rem] self-stretch">

                            <div className="flex justify-between items-center self-stretch">

                                <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Personal ID</h4>
                                    <h4 className="text-kb-second-color ">123-456-7890</h4>
                                </div>
                                {/* <img className='2xl:w-5 2xl:h-5 md:w-[0.9rem] md:h-[0.9rem]' src={Copy} /> */}
                            </div>

                            <div className="w-full border border-kb-neutral-50 border-opacity-20"></div>


                            {/* EMAIL */}
                            <div className="flex justify-between items-center self-stretch">

                                <div className="flex items-center 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className=" text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Email</h4>
                                    {isEdit.email
                                        ? <input
                                            name='email'
                                            {...register('email')}

                                            className="pl-2 border w-1/2 rounded-md h-7 outline-none"
                                        />
                                        : <h4 className="text-kb-second-color ">demo@gmail.com</h4>}
                                </div>
                                {!isEdit.email && <img
                                    onClick={() => {
                                        setIsEdit(pre => ({ ...pre, email: true }))
                                    }}
                                    className='2xl:w-5 2xl:h-5 md:w-[0.9rem] md:h-[0.9rem] cursor-pointer' src={Pen}

                                />}

                                {isEdit.email && <div className="text-kb-neutral-100 cursor-pointer"
                                    onClick={() => {
                                        setValue('email', mock?.email)
                                        setIsEdit(pre => ({ ...pre, email: false }))
                                    }}>X</div>}

                            </div>

                            <div className="w-full border border-kb-neutral-50 border-opacity-20"></div>

                            {/* PHONE */}
                            <div className="flex justify-between items-center self-stretch">

                                <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Phone</h4>
                                    {isEdit.phone
                                        ? <input
                                            name='phone'
                                            {...register('phone')}
                                            className="pl-2 border w-1/2 rounded-md h-7 outline-none" />
                                        : <h4 className="text-kb-second-color ">090xxxxx</h4>}
                                </div>
                                {!isEdit.phone && <img
                                    onClick={() => {
                                        setIsEdit(pre => ({ ...pre, phone: true }))
                                    }}
                                    className='2xl:w-5 2xl:h-5 md:w-[0.9rem] md:h-[0.9rem] cursor-pointer' src={Pen}

                                />}

                                {isEdit.phone && <div className="text-kb-neutral-100 cursor-pointer"
                                    onClick={() => {
                                        setValue('phone', mock?.phone)
                                        setIsEdit(pre => ({ ...pre, phone: false }))
                                    }}>X</div>}




                            </div>

                            {errors?.phone?.message && <div className="l3-r italic text-red-700">{errors?.phone?.message}</div>}
                            <div className="w-full border border-kb-neutral-50 border-opacity-20"></div>

                            {/* BIRTH */}
                            <div className="flex justify-between items-center self-stretch">
                                <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Birth</h4>
                                    {isEdit.birth
                                        ? <input

                                            name='birth'
                                            {...register('birth')}
                                            type='date' className="pl-2 border w-1/2 rounded-md h-7" />
                                        : <h4 className="text-kb-second-color ">dd//mm/yyyy</h4>}
                                </div>
                                {!isEdit.birth && <img
                                    onClick={() => {
                                        setIsEdit(pre => ({ ...pre, birth: true }))
                                    }}
                                    className='2xl:w-5 2xl:h-5 md:w-[0.9rem] md:h-[0.9rem] cursor-pointer' src={Pen}

                                />}

                                {isEdit.birth && <div className="text-kb-neutral-100 cursor-pointer"
                                    onClick={() => {
                                        setValue('birth', mock?.birth)
                                        setIsEdit(pre => ({ ...pre, birth: false }))
                                    }}>X</div>}
                            </div>
                            {errors?.birth?.message && <div className="l3-r italic text-red-700">Birth must be a date type</div>}
                            <div className="w-full border border-kb-neutral-50 border-opacity-20"></div>

                            <div className="flex justify-between items-center self-stretch">

                                <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Start at</h4>
                                    <h4 className="text-kb-second-color ">dd//mm/yyyy</h4>
                                </div>

                            </div>

                            <div className="w-full border border-kb-neutral-50 border-opacity-20"></div>
                            <div className="flex justify-between items-center self-stretch">

                                <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Article</h4>
                                    <h4 className="text-kb-second-color ">10</h4>
                                </div>

                            </div>



                            <div className="flex justify-end items-center self-stretch">

                                {console.log(' ww:', watch().email)}
                                {(watch().email || watch().phone || watch().birth) &&
                                    (isEdit?.email || isEdit?.phone || isEdit?.birth) && <button
                                        type='submit'
                                        className="flex justify-center items-center 2xl:gap-2.5 2xl:px-2.5 2xl:py-4 2xl:rounded-lg md:gap-2.5 md:px-[0.444rem] md:py-[0.71rem] md:rounded-md bg-kb-primary-gradient"
                                    >
                                        <div className="l3-b kb-text-shadow-lg">Save changes</div>

                                    </button>}

                            </div>

                            {/* <div className="flex justify-end items-center self-stretch">


                                <button
                                    type='submit'
                                    className="flex justify-center items-center 2xl:gap-2.5 2xl:px-2.5 2xl:py-4 2xl:rounded-lg md:gap-2.5 md:px-[0.444rem] md:py-[0.71rem] md:rounded-md bg-kb-primary-gradient"
                                >

                                    <div className="l3-b kb-text-shadow-lg">Edit profile</div>
                                </button>

                            </div> */}

                        </div>



                    </form>
                </div>



            </div>
        </div>
    )
}

export default PersonalInfo