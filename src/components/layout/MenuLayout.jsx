import { useState } from 'react'
import KB from '../../assets/image/KB.jpg'
import Tree from '../../assets/icon/tree.svg'



function MenuLayout() {

    const [isOpenMenu, setIsOpenMenu] = useState(true)

    return (
        <div className={`kb-shadow-white-bg flex h-full flex-col items-center shrink-0 2xl:pt-16 2xl:pb-6 2xl:px-2.5 2xl:gap-[2.625rem] 2xl:rounded-[0rem_1.25rem_1.25rem_0rem] md:pt-[2.84rem] md:pb-[1.1rem] md:px-[0.444rem] md:gap-[1.9rem] md:rounded-[0rem_0.9rem_0.9rem_0rem] 
        ${isOpenMenu ? '2xl:w-[16.1rem] md:w-[11.431rem]' : '2xl:w-[7.75rem] md:w-[5.5rem]'}`}>
            <div onClick={() => { setIsOpenMenu(!isOpenMenu) }} className="flex cursor-pointer">
                <div className="flex items-center 2xl:gap-2.5 md:gap-[0.444rem] ">
                    <img className=" 2xl:w-11 2xl:h-11 md:w-[2rem] md:h-[2rem] left-0 top-0  rounded-full" src={KB} />
                    {isOpenMenu && <h3>
                        <span className="text-kb-second-color">Know</span>
                        <span className="kb-text-primary-gradient">Base</span>
                    </h3>}
                </div>
            </div>

            <div className="self-stretch bg-kb-primary-gradient justify-center items-center inline-flex 2xl:px-2.5 2xl:py-4 2xl:gap-2.5 2xl:rounded-lg md:px-[0.444rem] md:py-[0.71rem] md:gap-[0.444rem] md:rounded-md">

                <img src={Tree} className="2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem] flex-col justify-center items-center inline-flex" />
                {isOpenMenu && <div className="l3-b kb-text-shadow-lg">Folder tree</div>}

            </div>

            <div className="flex flex-col items-center 2xl:gap-3.5 md:gap-[0.6rem] self-stretch">

                {/* <div className="self-stretch pl-[42px] py-[5px] rounded-lg justify-between items-center gap-2.5 inline-flex">

                    <div className="py-2.5 justify-start items-center gap-3.5 flex">
                        <img src={Home} className="w-5 h-5 py-px flex-col justify-center items-center gap-2.5 inline-flex" />
                    </div>

                </div> */}

                <div className={`self-stretch bg-kb-primary-gradient items-center inline-flex text-kb-neutral-white 2xl:px-2.5 2xl:py-4 2xl:gap-2.5 2xl:rounded-lg md:px-[0.444rem] md:py-[0.71rem] md:gap-[0.7rem] md:rounded-md
                ${isOpenMenu ? 'justify-start 2xl:pl-[2.62rem] md:pl-[1.9rem]' : 'justify-center'}`}>
                    <i className="fa-solid fa-house fa-sm flex-col justify-center items-center inline-flex 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]"></i>
                    {isOpenMenu && <div className="l3-b kb-text-shadow-lg">Home</div>}
                </div>

                {/* <div className="self-stretch pl-[42px] py-[5px] rounded-lg justify-between items-center gap-2.5 inline-flex">
                    <div className="py-2.5 justify-start items-center gap-3.5 flex">
                        <img src={Share} className="w-5 h-5 flex-col justify-center items-center gap-2.5 inline-flex" />
                    </div>
                </div> */}
                <div className={`self-stretch bg-kb-primary-gradient items-center inline-flex text-kb-neutral-white 2xl:px-2.5 2xl:py-4 2xl:gap-2.5 2xl:rounded-lg md:px-[0.444rem] md:py-[0.71rem] md:gap-[0.7rem] md:rounded-md
                ${isOpenMenu ? 'justify-start 2xl:pl-[2.62rem] md:pl-[1.9rem]' : 'justify-center'}`}>

                    <i className="fa-solid fa-share-nodes fa-sm flex-col justify-center items-center inline-flex 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]"></i>
                    {isOpenMenu && <div className="l3-b kb-text-shadow-lg">Share</div>}
                </div>


                {/* <div className="self-stretch pl-[42px] py-[5px] rounded-lg justify-between items-center gap-2.5 inline-flex">
                    <div className="py-2.5 justify-start items-center gap-3.5 flex">
                        <img src={Clock} className="w-5 h-5 relative" />
                    </div>
                </div> */}
                <div className={`self-stretch bg-kb-primary-gradient items-center inline-flex text-kb-neutral-white 2xl:px-2.5 2xl:py-4 2xl:gap-2.5 2xl:rounded-lg md:px-[0.444rem] md:py-[0.71rem] md:gap-[0.7rem] md:rounded-md
                ${isOpenMenu ? 'justify-start 2xl:pl-[2.62rem] md:pl-[1.9rem]' : 'justify-center'}`}>
                    <i className="fa-solid fa-clock fa-sm flex-col justify-center items-center inline-flex 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]"></i>
                    {isOpenMenu && <div className="l3-b kb-text-shadow-lg">Recent</div>}
                </div>
                {/* <div className="self-stretch pl-[42px] py-[5px] rounded-lg justify-between items-center gap-2.5 inline-flex">
                    <div className="py-2.5 justify-start items-center gap-3.5 flex">
                        <img src={Heart} className="w-5 h-5 flex-col justify-center items-center gap-2.5 inline-flex" />
                    </div>
                </div> */}

                <div className={`self-stretch bg-kb-primary-gradient items-center inline-flex text-kb-neutral-white 2xl:px-2.5 2xl:py-4 2xl:gap-2.5 2xl:rounded-lg md:px-[0.444rem] md:py-[0.71rem] md:gap-[0.7rem] md:rounded-md
                ${isOpenMenu ? 'justify-start 2xl:pl-[2.62rem] md:pl-[1.9rem]' : 'justify-center'}`}>
                    <i className="fa-solid fa-heart fa-sm flex-col justify-center items-center inline-flex 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]"></i>
                    {isOpenMenu && <div className="l3-b kb-text-shadow-lg">Favourite</div>}
                </div>

                {/* <div className="self-stretch pl-[42px] py-[5px] rounded-lg justify-between items-center gap-2.5 inline-flex">
                    <div className="py-2.5 justify-start items-center gap-3.5 flex">
                        <img src={Bin} className="w-5 h-5 justify-center items-center gap-2.5 flex" />
                    </div>
                </div> */}

                <div className={`self-stretch bg-kb-primary-gradient items-center inline-flex text-kb-neutral-white 2xl:px-2.5 2xl:py-4 2xl:gap-2.5 2xl:rounded-lg md:px-[0.444rem] md:py-[0.71rem] md:gap-[0.7rem] md:rounded-md
                ${isOpenMenu ? 'justify-start 2xl:pl-[2.62rem] md:pl-[1.9rem]' : 'justify-center'}`}>
                    <i className="fa-solid fa-trash fa-sm flex-col justify-center items-center inline-flex 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]"></i>
                    {isOpenMenu && <div className="l3-b kb-text-shadow-lg">Bin</div>}
                </div>
            </div>

            <div className="self-stretch h-[0px] border border-neutral-300" />

            <div className="flex flex-col items-center 2xl:gap-3.5 md:gap-[0.6rem] self-stretch">

                <div className={`self-stretch bg-kb-primary-gradient items-center inline-flex text-kb-neutral-white 2xl:px-2.5 2xl:py-4 2xl:gap-2.5 2xl:rounded-lg md:px-[0.444rem] md:py-[0.71rem] md:gap-[0.7rem] md:rounded-md
                ${isOpenMenu ? 'justify-start 2xl:pl-[2.62rem] md:pl-[1.9rem]' : 'justify-center'}`}>
                    <i className="fa-solid fa-headset fa-sm flex-col justify-center items-center inline-flex 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]"></i>
                    {isOpenMenu && <div className="l3-b kb-text-shadow-lg">Support</div>}
                </div>

                <div className={`self-stretch bg-kb-primary-gradient items-center inline-flex text-kb-neutral-white 2xl:px-2.5 2xl:py-4 2xl:gap-2.5 2xl:rounded-lg md:px-[0.444rem] md:py-[0.71rem] md:gap-[0.7rem] md:rounded-md
                ${isOpenMenu ? 'justify-start 2xl:pl-[2.62rem] md:pl-[1.9rem]' : 'justify-center'}`}>
                    <i className="fa-solid fa-gear fa-sm flex-col justify-center items-center inline-flex 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]"></i>
                    {isOpenMenu && <div className="l3-b kb-text-shadow-lg">Setting</div>}
                </div>

            </div>
            {isOpenMenu && <div className="flex justify-center items-end 2xl:gap-2.5 md:gap-[0.444rem] flex-[1_0_0] self-stretch">
                <div className="l3-b text-kb-neutral-100">Version 1.1.0</div>
            </div>}
        </div>
    )
}

export default MenuLayout
