import React from 'react'
import Article from '../Article/Article'

function Blogs() {
    return (
        <div className="flex flex-col items-start gap-[1.125rem] flex-[1_0_0] px-6 py-[2.8125rem] rounded-[0.5625rem] bg-kb-neutral-white">

            <div className="w-[44.39063rem] h-[1.875rem]">

                <div className="flex w-[44.39063rem] flex-col items-start gap-[1.125rem] pl-0">

                    <h3 className=" text-kb-second-color">Blogs</h3>
                </div>

            </div>

            <div className="flex flex-col items-start gap-[0.5625rem] self-stretch pl-0">

                <Article />

            </div>
        </div>
    )
}

export default Blogs
