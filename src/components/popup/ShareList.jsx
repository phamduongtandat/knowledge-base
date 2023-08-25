

function ShareList() {

    const mock = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div className="fixed left-0 top-0 inset-0 bg-kb-neutral-500/20">
            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex w-[26.67188rem] flex-col items-start gap-[1.6875rem] p-[1.875rem] rounded-xl bg-kb-neutral-white">

                <div className="flex justify-center items-center gap-[1.125rem] self-stretch">

                    <h2 className="kb-text-primary-gradient flex-1">Share this file</h2>
                    <div className="flex justify-end items-center gap-[0.46875rem]">
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
                            <div className="p1-b ">KnowBase.com/username/filename</div>
                        </div>

                        <div className="bg-kb-primary-gradient kb-text-shadow-sm flex justify-center items-center gap-[0.46875rem] px-1.5 py-[0.5625rem] rounded-md cursor-pointer">
                            <i className="fa-solid fa-copy fa-sm"></i>
                            <div className="l4-b">Copy</div>
                        </div>

                    </div>
                </div>


                <div className="self-stretch h-[255.50px] flex-col justify-start items-start gap-[9px] flex">


                    <div className="flex flex-col items-start gap-[0.28125rem] self-stretch">
                        <h3 className="text-kb-second-color ">Invite friend to see</h3>

                        <div className="flex justify-between items-center self-stretch p-[0.28125rem] rounded-md border">

                            <div className="flex items-center gap-[0.5625rem] flex-[1_0_0] pl-[0.56rem] ">
                                <i className="fa-solid fa-magnifying-glass fa-sm text-kb-neutral-100"></i>
                                <input className="p1-b outline-none " placeholder='Friend name' />
                            </div>

                            <div className="bg-kb-primary-gradient kb-text-shadow-sm flex justify-center items-center gap-[0.46875rem] px-1.5 py-[0.5625rem] rounded-md cursor-pointer">
                                <i className="fa-solid fa-paper-plane fa-sm"></i>
                                <div className="l4-b">Invite</div>
                            </div>

                        </div>
                    </div>


                    {/* SHARE LIST */}
                    <div className="overflow-y-scroll self-stretch small-scrollbar">
                        {mock.map((i) => {
                            return <div key={i} className=" flex items-center gap-[0.46875rem] self-stretch ">
                                <div className="flex items-center gap-[0.46875rem] flex-[1_0_0]">
                                    <img className="w-6 h-6 rounded-3xl border-yellow-300" src="https://via.placeholder.com/24x24" />

                                    <div className="flex flex-col justify-center items-start self-stretch">
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="self-stretch text-kb-second-color p2-b">Your friend</div>
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
