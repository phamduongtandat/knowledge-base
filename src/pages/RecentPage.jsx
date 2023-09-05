import ContentPage from "../components/container/ContentPage"
import useGetUserID from "../services/auth/useGetUserID";
import useGetRecentPage from "../services/recent/useGetRecentPage"
import checkLogin from './../utils/checkLogin';


function RecentPage() {
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)
    const { recentContent } = useGetRecentPage(userID)
    console.log('recentContent :', recentContent)
    return (
        <>
            <ContentPage titlePage="Recent" data={recentContent} />
            {/* <EmptyPage titlePage="Recent" /> */}
        </>
    )
}

export default RecentPage
