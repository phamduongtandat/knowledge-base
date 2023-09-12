import ContentPage from "../components/container/ContentPage"
import ContentLoader from "../components/loader/ContentLoader";
import useGetUserID from "../services/auth/useGetUserID";
import useGetRecentPage from "../services/recent/useGetRecentPage"
import checkLogin from './../utils/checkLogin';


function RecentPage() {
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)
    const { recentContent, isLoading } = useGetRecentPage(userID)
    console.log('recentContent :', recentContent)
    return (
        <>
            {isLoading && <div className="flex justify-center items-center md:min-h-[476px] 2xl:min-h-[787px] max-h-full">
                <ContentLoader />
            </div>}
            {!isLoading && <ContentPage titlePage="Recent" data={recentContent} />}
            {/* <EmptyPage titlePage="Recent" /> */}
        </>
    )
}

export default RecentPage
