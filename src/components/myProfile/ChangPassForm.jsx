

function ChangPassForm() {
    return (
        <div className=" bg-kb-neutral-white flex items-start flex-[1_0_0] md:gap-[0.333rem] md:px-4 md:py-[2rem] md:rounded-[0.4rem] 2xl:gap-[0.46875rem] 2xl:px-6 2xl:py-[2.8125rem] 2xl:rounded-[0.5625rem] ">

            <form className="2xl:h-[18rem] md:h-[13.3rem] flex-[1_0_0]">

                <div className="flex flex-col items-start 2xl:w-[62.125rem] 2xl:gap-[1.125rem] 2xl:pl-[1.88rem] md:w-[44.1rem] md:gap-[0.8rem] md:pl-[1.34rem]">

                    <h2 className="text-kb-second-color self-stretch">Change password</h2>


                    <div className="flex flex-col items-start 2xl:gap-[0.9375rem] md:gap-[0.7rem] self-stretch">

                        <div className="flex justify-between items-center self-stretch">

                            <div className="flex items-center justify-around 2xl:gap-[5.85938rem] md:gap-[4.2rem] flex-[1_0_0]">

                                <div className="l3-b text-kb-neutral-300 2xl:w-[12rem] md:w-[8rem]">Old password</div>

                                <input className="border px-2" type='password' />
                                <span className="italic text-red-700 l3-r">require</span>
                            </div>
                        </div>

                        <div className="2xl:w-[60.25rem] 2xl:h-[0.04688rem] md:w-[42.8rem] md:h-[0.0333rem]  bg-kb-neutral-50" />

                        <div className="flex justify-between items-center self-stretch">

                            <div className="flex items-center justify-around 2xl:gap-[5.85938rem] md:gap-[4.2rem] flex-[1_0_0]">

                                <div className="l3-b text-kb-neutral-300 2xl:w-[12rem] md:w-[8rem]">New password</div>
                                <input className="border px-2" type='password' />
                                <span className="italic text-red-700 l3-r">require</span>
                            </div>
                        </div>

                        <div className="2xl:w-[60.25rem] 2xl:h-[0.04688rem] md:w-[42.8rem] md:h-[0.0333rem]  bg-kb-neutral-50" />

                        <div className="flex justify-between items-center self-stretch">

                            <div className="flex items-center justify-around 2xl:gap-[5.85938rem] md:gap-[4.2rem] flex-[1_0_0]">

                                <div className="l3-b text-kb-neutral-300 2xl:w-[12rem] md:w-[8rem]">Confirm password</div>
                                <input className="border px-2" type='password' />
                                <span className="italic text-red-700 l3-r">require</span>
                            </div>
                        </div>

                        <div className="2xl:w-[60.25rem] 2xl:h-[0.04688rem] md:w-[42.8rem] md:h-[0.0333rem]  bg-kb-neutral-50" />

                    </div>


                    <div className="flex flex-col items-end 2xl:gap-[0.46875rem] md:gap-[0.333rem] self-stretch">
                        <button className="bg-kb-primary-gradient flex justify-center items-center 2xl:gap-[0.46875rem] 2xl:px-[0.46875rem] 2xl:py-3  rounded-md md:gap-[0.333rem] md:px-[0.333rem] md:py-2 ">
                            <div className="l3-b kb-text-shadow-lg">Save changes</div>
                        </button>
                    </div>
                </div>
            </form>
        </div>




    )
}

export default ChangPassForm
