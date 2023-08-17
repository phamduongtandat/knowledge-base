import React from 'react'
import Home from '../../assets/icon/home.svg'
import Arrow from '../../assets/icon/arrow.svg'
function PageTitleLayout() {
    return (


        <div className="flex items-center 2xl:gap-2.5 md:gap-[0.444rem]">

            <img src={Home} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />

            <img src={Arrow} className="flex  rotate-360 flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />

            <div className="l3-b text-kb-neutral-300">My Profile</div>

        </div>
    )
}

export default PageTitleLayout
