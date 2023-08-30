import { useLocation, useParams } from "react-router-dom";
import ContentPage from "../components/container/ContentPage";
import useGetFolderContent from "../services/folder/useGetFolderContent";

import useGetProperties from "../services/option/useGetProperties";
import { useSelector } from "react-redux";
import checkLogin from "../utils/checkLogin";
import useGetUserID from "../services/auth/useGetUserID";


function HomeDetailPage() {
    const { id } = useParams()
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { folderContent } = useGetFolderContent(userID, id)
    console.log('folderContent :', folderContent)
    const { pathname } = useLocation()
    const contentID = pathname?.split('/').slice(-1)[0]
    const { properties } = useGetProperties(contentID)

    const headerChart = [properties?.parentName, properties?.name]
    if (!properties?.parentName) {
        headerChart?.shift()
    }


    // console.log(' contentID:', contentID)
    // console.log('headerChart :', headerChart)

    return (
        <ContentPage data={folderContent} titlePage='home' headerChart={headerChart} />
    )
}

export default HomeDetailPage
