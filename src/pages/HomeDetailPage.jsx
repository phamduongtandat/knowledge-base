import { useLocation, useParams } from "react-router-dom";
import ContentPage from "../components/container/ContentPage";
import useGetFolderContent from "../services/folder/useGetFolderContent";

import useGetProperties from "../services/option/useGetProperties";

import checkLogin from "../utils/checkLogin";
import useGetUserID from "../services/auth/useGetUserID";
import ContentLoader from "../components/loader/ContentLoader";


function HomeDetailPage() {
    const { id } = useParams()
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { folderContent, isLoading } = useGetFolderContent(userID, id)
    console.log('folderContent :', folderContent)
    const { pathname } = useLocation()
    const contentID = pathname?.split('/').slice(-1)[0]
    const { properties } = useGetProperties(contentID)

    const headerChart = [
        { name: properties?.parentName, id: properties?.parentId },
        { name: properties?.name, id: properties?.id }
    ]
    if (!properties?.parentName) {
        headerChart?.shift()
    }


    // console.log(' contentID:', contentID)
    // console.log('headerChart :', headerChart)

    return (
        <>
            {isLoading && <div className="flex justify-center items-center md:min-h-[476px] 2xl:min-h-[787px] max-h-full">
                <ContentLoader />
            </div>}

            {!isLoading && <ContentPage data={folderContent} titlePage='home' headerChart={headerChart} />}
        </>

    )
}

export default HomeDetailPage
