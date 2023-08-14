import { useState } from 'react'
import bgProfile from '../../assets/image/bg-profile.png'
import Copy from '../../assets/icon/Copy.png'
import Pen from '../../assets/icon/Pen.png'
function PersonalInfo() {
    const [isEdit, setIsEdit] = useState({ email: false, phone: false, birth: false })
    return (
        <div className="flex flex-col h-fit items-start 2xl:gap-2.5 md:gap-[0.444rem] self-stretch flex-grow">

            <div className=" bg-kb-neutral-white flex flex-col items-start self-stretch 2xl:px-8 2xl:py-[3.75rem] 2xl:rounded-xl 2xl:h-[60rem] md:px-[1.42rem] md:py-[2.7rem] md:rounded-[0.5325rem] md:h-[42.6rem]">

                <div className="relative w-full">
                    <img className="w-full shrink-0 2xl:h-[15.8125rem] 2xl:rounded-[0.625rem] md:h-[11.23rem] md:rounded-[0.444rem]" src={bgProfile} />

                    <div className=" flex absolute w-full flex-col items-start 2xl:top-[10.69rem] 2xl:gap-6 2xl:pl-[2.5rem] md:top-[7.6rem] md:gap-[1.1rem] md:pl-[1.8rem] ">

                        <div className="flex items-center  2xl:gap-5 md:gap-[0.9rem] self-stretch ">

                            <div className="flex flex-col justify-center items-center 2xl:gap-[1.125rem] md:gap-[0.8rem]">

                                <img className="2xl:w-[11.4375rem] 2xl:h-[11.4375rem] rounded 2xl:border-2 md:w-[8.1rem] md:h-[8.1rem] md:border border-kb-primary-color" src="https://via.placeholder.com/183x183" />

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
                                <img className='2xl:w-5 2xl:h-5 md:w-[0.9rem] md:h-[0.9rem]' src={Copy} />
                            </div>

                            <div className="w-full border border-neutral-400 border-opacity-20"></div>

                            <div className="flex justify-between items-center self-stretch">

                                <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className=" text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Email</h4>
                                    {isEdit.email ? <input />
                                        : <h4 className="text-kb-second-color ">demo@gmail.com</h4>}
                                </div>
                                <img className='2xl:w-5 2xl:h-5 md:w-[0.9rem] md:h-[0.9rem]' src={Pen} />
                            </div>

                            <div className="w-full border border-neutral-400 border-opacity-20"></div>

                            <div className="flex justify-between items-center self-stretch">
                                <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Phone</h4>
                                    {isEdit.phone ? <input />
                                        : <h4 className="text-kb-second-color ">090xxxxx</h4>}
                                </div>
                                <img className='2xl:w-5 2xl:h-5 md:w-[0.9rem] md:h-[0.9rem]' src={Pen} />
                            </div>

                            <div className="w-full border border-neutral-400 border-opacity-20"></div>

                            <div className="flex justify-between items-center self-stretch">
                                <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Phone</h4>
                                    {isEdit.birth ? <input />
                                        : <h4 className="text-kb-second-color ">dd//mm/yyyy</h4>}
                                </div>
                                <img className='2xl:w-5 2xl:h-5 md:w-[0.9rem] md:h-[0.9rem]' src={Pen} />
                            </div>

                            <div className="w-full border border-neutral-400 border-opacity-20"></div>

                            <div className="flex justify-between items-center self-stretch">

                                <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Start at</h4>
                                    <h4 className="text-kb-second-color ">dd//mm/yyyy</h4>
                                </div>

                            </div>

                            <div className="w-full border border-neutral-400 border-opacity-20"></div>
                            <div className="flex justify-between items-center self-stretch">

                                <div className="flex items-start 2xl:gap-[7.8125rem] md:gap-[5.55rem] flex-[1_0_0]">
                                    <h4 className="text-neutral-400 2xl:w-[7.5rem] md:w-[5.325rem]">Artical</h4>
                                    <h4 className="text-kb-second-color ">10</h4>
                                </div>

                            </div>

                            <div className="w-full border border-neutral-400 border-opacity-20"></div>
                        </div>

                        <div className="flex flex-col items-end 2xl:gap-2.5 md:gap-[0.444rem] self-stretch">
                            <button
                                onClick={() => { console.log(' hehe') }}
                                className="flex justify-center items-center 2xl:gap-2.5 2xl:px-2.5 2xl:py-4 2xl:rounded-lg md:gap-2.5 md:px-[0.444rem] md:py-[0.71rem] md:rounded-s-md bg-kb-primary-gradient">
                                <div className="l3-b kb-text-shadow-lg">Save changes</div>
                            </button>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default PersonalInfo