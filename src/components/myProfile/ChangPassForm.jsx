import React from 'react'

function ChangPassForm() {
    return (
        <div className=" bg-kb-neutral-white flex items-start flex-[1_0_0] gap-[0.46875rem] px-6 py-[2.8125rem] rounded-[0.5625rem]">

            <form className="h-[14.4375rem] flex-[1_0_0]">

                <div className="flex flex-col items-start w-[62.125rem] gap-[1.125rem] pl-[1.88rem] ">

                    <h3 className="text-kb-second-color self-stretch">Change password</h3>


                    <div className="flex flex-col items-start gap-[0.9375rem] self-stretch">

                        <div className="flex justify-between items-center self-stretch">

                            <div className="flex items-start gap-[5.85938rem] flex-[1_0_0]">

                                <div className="l3-b text-kb-neutral-300 w-[9.375rem]">Old password</div>

                                <input className="border-2 px-2" type='password' />
                                <span className="italic text-red-700 l3-r">require</span>
                            </div>
                        </div>

                        <div className="w-[60.25rem] h-[0.04688rem] border bg-kb-neutral-300" />

                        <div className="flex justify-between items-center self-stretch">

                            <div className="flex items-start gap-[5.85938rem] flex-[1_0_0]">

                                <div className="l3-b text-kb-neutral-300 w-[9.375rem]">New password</div>
                                <input className="border-2 px-2" type='password' />
                                <span className="italic text-red-700 l3-r">require</span>
                            </div>
                        </div>

                        <div className="w-[60.25rem] h-[0.04688rem] border bg-kb-neutral-300" />

                        <div className="flex justify-between items-center self-stretch">

                            <div className="flex items-start gap-[5.85938rem] flex-[1_0_0]">

                                <div className="l3-b text-kb-neutral-300 w-[9.375rem]">Confirm password</div>
                                <input className="border-2 px-2" type='password' />
                                <span className="italic text-red-700 l3-r">require</span>
                            </div>
                        </div>

                        <div className="w-[60.25rem] h-[0.04688rem] border bg-kb-neutral-300" />

                    </div>


                    <div className="flex flex-col items-end gap-[0.46875rem] self-stretch">
                        <button className="flex justify-center items-center gap-[0.46875rem] px-[0.46875rem] py-3 bg-kb-primary-gradient rounded-md">
                            <div className="l3-b kb-text-shadow-lg">Save changes</div>
                        </button>
                    </div>
                </div>
            </form>
        </div>




    )
}

export default ChangPassForm
