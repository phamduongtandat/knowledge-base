import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getLogOut } from '../../redux/popupSlice';




function ProfileOption() {
    const dispatch = useDispatch()
    // const backLogin = useNavigate()
    const handleLogOut = () => {

        // document.cookie = `access_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC`
        // document.cookie = `refresh_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC`

        // //checkLogin(false)
        // backLogin('/login')
        //location.reload()
        localStorage.setItem('isLogOut', JSON.stringify(true))
        dispatch(getLogOut(true))

    }

    return (
        <div className="kb-shadow-white-bg flex flex-col justify-center items-start 2xl:w-[10.75rem] 2xl:px-4 2xl:py-2.5 2xl:rounded-lg md:w-fit md:px-3 md:py-1.5 md:rounded-md ">

            <Link to='profile' className="flex justify-start items-center gap-2.5 self-stretch px-2 py-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M15.5859 15.0078C14.7227 13.5078 13.1016 12.5 11.25 12.5H8.75C6.89844 12.5 5.27734 13.5078 4.41406 15.0078C5.78906 16.5391 7.78125 17.5 10 17.5C12.2188 17.5 14.2109 16.5352 15.5859 15.0078ZM0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM10 10.625C10.7459 10.625 11.4613 10.3287 11.9887 9.80124C12.5162 9.27379 12.8125 8.55842 12.8125 7.8125C12.8125 7.06658 12.5162 6.35121 11.9887 5.82376C11.4613 5.29632 10.7459 5 10 5C9.25408 5 8.53871 5.29632 8.01126 5.82376C7.48382 6.35121 7.1875 7.06658 7.1875 7.8125C7.1875 8.55842 7.48382 9.27379 8.01126 9.80124C8.53871 10.3287 9.25408 10.625 10 10.625Z" fill="#8E9090" />
                </svg>
                <div className="l3-b text-kb-neutral-300">My Profile</div>
            </Link>

            <div className="flex justify-start items-center gap-2.5 self-stretch px-2 py-3 rounded-lg cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12.8" viewBox="0 0 20 18" fill="none">
                    <path d="M11.1111 1.22132C11.1111 0.877575 10.9549 0.554658 10.684 0.346325C10.4132 0.137991 10.0625 0.0616025 9.72917 0.144936L3.48264 1.70744C2.74306 1.89146 2.22222 2.55813 2.22222 3.32202V15.6658H1.11111C0.496528 15.6658 0 16.1623 0 16.7769C0 17.3915 0.496528 17.888 1.11111 17.888H11.1111V1.22132ZM8.88889 8.9991C8.88889 9.61369 8.51736 10.1102 8.05556 10.1102C7.59375 10.1102 7.22222 9.61369 7.22222 8.9991C7.22222 8.38452 7.59375 7.88799 8.05556 7.88799C8.51736 7.88799 8.88889 8.38452 8.88889 8.9991ZM12.2222 4.55466H15.5556V16.7769C15.5556 17.3915 16.0521 17.888 16.6667 17.888H18.8889C19.5035 17.888 20 17.3915 20 16.7769C20 16.1623 19.5035 15.6658 18.8889 15.6658H17.7778V4.55466C17.7778 3.32896 16.7812 2.33244 15.5556 2.33244H12.2222V4.55466Z" fill="#8E9090" />
                </svg>
                <div onClick={handleLogOut} className="l3-b text-kb-neutral-300">Log out</div>
            </div>
        </div>
    )
}

export default ProfileOption
