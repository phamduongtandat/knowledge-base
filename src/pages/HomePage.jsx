import ContentPage from "../components/container/ContentPage";
import EmptyPage from "../components/noData/EmptyPage";

import useGetHomePage from "../services/home/useGetHomePage";
import checkLogin from "../utils/checkLogin";
import useGetUserID from "../services/auth/useGetUserID";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../redux/authSlice";
import ContentLoader from "../components/loader/ContentLoader";



function HomePage() {

    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)
    const dispatch = useDispatch()
    //dispatch(getUserId(userID))



    const status = useSelector(state => state.filter.isAll)
    console.log(' status:', status)
    const { homePageContent, isLoading } = useGetHomePage(userID, status)
    console.log('homePageContent :', homePageContent)

    return (
        <>
            {isLoading && <div className="flex justify-center items-center md:min-h-[476px] 2xl:min-h-[787px] max-h-full">
                <ContentLoader />
            </div>}
            {!isLoading && <ContentPage data={homePageContent} titlePage="Home" />}
            {/* <EmptyPage titlePage="Home" /> */}
        </>


    );
}

export default HomePage;
