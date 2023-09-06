import { useLocation, useParams } from "react-router-dom"
import ContentPage from "../components/container/ContentPage"
import checkLogin from "../utils/checkLogin"
import useGetUserID from "../services/auth/useGetUserID"
import useGetFolderContent from "../services/folder/useGetFolderContent"
import useGetProperties from "../services/option/useGetProperties"


function ShareDetailPage() {

    const { id } = useParams()
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { folderContent } = useGetFolderContent(userID, id)
    console.log('folderContent :', folderContent)
    const { pathname } = useLocation()
    const contentID = pathname?.split('/').slice(-1)[0]
    const { properties } = useGetProperties(contentID)
    console.log('properties :', properties)
    const headerChart = [properties?.parentName, properties?.name]
    if (!properties?.parentName) {
        headerChart?.shift()
    }


    return (
        <ContentPage titlePage='shared' data={folderContent} headerChart={headerChart} />
    )
}

export default ShareDetailPage
