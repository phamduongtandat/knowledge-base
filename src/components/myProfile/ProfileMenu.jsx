import React from 'react'

function ProfileMenu() {
    return (

        <div className="flex flex-col justify-center items-start 2xl:px-4 2xl:py-2.5 2xl:rounded-lg md:px-[0.71rem] md:py-[0.444rem] md:rounded-md bg-kb-neutral-white ">
            <div className="flex justify-center items-center 2xl:gap-2.5 2xl:px-2 2xl:py-3 2xl:rounded-lg md:gap-[0.444rem] md:px-[0.355rem] md:py-[0.5325rem] md:rounded-md">
                <div className="l3-b text-kb-primary-color">Personal Info</div>
            </div>
            <div className="flex justify-center items-center 2xl:gap-2.5 2xl:px-2 2xl:py-3 2xl:rounded-lg md:gap-[0.444rem] md:px-[0.355rem] md:py-[0.5325rem] md:rounded-md">
                <div className="l3-b text-kb-neutral-300">Change password</div>
            </div>
            <div className="flex justify-center items-center 2xl:gap-2.5 2xl:px-2 2xl:py-3 2xl:rounded-lg md:gap-[0.444rem] md:px-[0.355rem] md:py-[0.5325rem] md:rounded-md">
                <div className="l3-b text-kb-neutral-300">Blogs(Guest)</div>
            </div>
        </div>

    )
}

export default ProfileMenu
