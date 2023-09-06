
import { useState } from "react";
import ContentPage from "../components/container/ContentPage";
import EmptyPage from "../components/noData/EmptyPage";

import useGetHomePage from "../services/home/useGetHomePage";
import checkLogin from "../utils/checkLogin";
import useGetUserID from "../services/auth/useGetUserID";
import { useDispatch } from "react-redux";
import { getUserId } from "../redux/authSlice";


function HomePage() {

    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)
    const dispatch = useDispatch()
    dispatch(getUserId(userID))

    const [isAll, setIsAll] = useState('all')


    const { homePageContent } = useGetHomePage(userID, isAll || 'all')
    console.log('homePageContent :', homePageContent)

    return (
        <>
            <ContentPage data={homePageContent} titlePage="Home" isAll={isAll} setIsAll={setIsAll} />
            {/* <EmptyPage titlePage="Home" /> */}
        </>


    );
}

export default HomePage;
