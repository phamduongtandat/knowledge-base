import React from 'react'

function Blogs() {
    return (
        <div className="flex flex-col items-start gap-[1.125rem] flex-[1_0_0] px-6 py-[2.8125rem] rounded-[0.5625rem] bg-kb-neutral-white">

            <div className="w-[44.39063rem] h-[1.875rem]">

                <div className="flex w-[44.39063rem] flex-col items-start gap-[1.125rem] pl-0">

                    <h3 className=" text-kb-second-color">Blogs</h3>
                </div>

            </div>

            <div className="flex flex-col items-start gap-[0.5625rem] self-stretch pl-0">

                <div className="flex justify-center items-center gap-[0.70313rem] self-stretch p-[0.70313rem] kb-shadow-white-bg">

                    <img className="self-stretch w-[3.75444rem] h-[3.4375rem] rounded-[0.1875rem]" src="https://via.placeholder.com/60x55" />


                    <div className="flex justify-between items-start flex-[1_0_0] self-stretch">

                        <div className="flex flex-col items-center gap-[0.1875rem] flex-[1_0_0]">

                            <div className="flex items-start gap-[0.5625rem] self-stretch">

                                <div className="p1-b kb-text-primary-gradient">Oracle</div>

                                <div className="flex items-center gap-[0.23438rem] flex-[1_0_0] self-stretch">

                                    <i className="fa-solid fa-paperclip fa-sm text-kb-neutral-300"></i>
                                    <div className="p3-b text-kb-neutral-300">2 files</div>
                                </div>
                            </div>

                            <h4 className="self-stretch text-kb-second-color">Optimizing Oracle Database Performance for E-commerce</h4>

                            <div className="self-stretch p3-r text-kb-second-color">This blog post can delve into how businesses, especially e-commerce platforms, can optimize their Oracle databases... </div>

                        </div>

                        <div className="flex flex-col justify-between items-end self-stretch">

                            <img className="w-6 h-6 rounded-3xl border border-kb-primary-color" src="https://via.placeholder.com/24x24" />

                            <div className="flex flex-col justify-end items-end flex-[1_0_0]">

                                <div className="self-end p2-b text-kb-second-color">
                                    Author of the blog
                                </div>
                                <div className="self-stretch text-kb-neutral-300 p3-r">
                                    June 22, 2023 | at 19:00
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
