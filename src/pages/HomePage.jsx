
import { useState } from "react";
import ContentPage from "../components/container/ContentPage";
import EmptyPage from "../components/noData/EmptyPage";

import useGetHomePage from "../services/home/useGetHomePage";


function HomePage() {

    const [isAll, setIsAll] = useState('all')

    const { homePageContent } = useGetHomePage(isAll || 'all')
    console.log('homePageContent :', homePageContent)

    return (
        <>
            <ContentPage data={homePageContent} titlePage="Home" isAll={isAll} setIsAll={setIsAll} />
            {/* <EmptyPage titlePage="Home" /> */}
        </>


    );
}

export default HomePage;
