import React from 'react'
import ProfileMenu from '../components/myProfile/ProfileMenu'
import PersonalInfo from '../components/myProfile/PersonalInfo'
import ProfileLayout from '../components/layout/ProfileLayout'
import MenuLayout from '../components/layout/MenuLayout'
import PageTitleLayout from '../components/layout/PageTitleLayout'
import ChangPassForm from '../components/myProfile/ChangPassForm'
import Blogs from '../components/myProfile/Blogs'

function ProfilePage() {
    return (
        <div className='bg-kb-background w-screen h-screen'>
            <ProfileLayout>
                <MenuLayout />
                <div className="flex flex-col items-start flex-[1_0_0] self-stretch">
                    <div className="flex items-center self-stretch 2xl:gap-2.5 2xl:pt-11 2xl:pb-0 2xl:px-9 md:gap-[0.444rem] md:pt-[1.95rem] md:pb-0 md:px-[1.6rem">

                        <PageTitleLayout />
                    </div>
                    <div className="flex items-start  flex-[1_0_0] self-stretch 2xl:gap-6 2xl:px-9 2xl:py-6 md:gap-[1.1rem] md:px-[1.6rem] md:py-[1.1rem]">
                        <ProfileMenu />
                        {/* <PersonalInfo /> */}
                        {/* <ChangPassForm /> */}
                        <Blogs />
                    </div>

                </div>

            </ProfileLayout>

        </div>
    )
}

export default ProfilePage
