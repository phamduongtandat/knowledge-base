
import ContentPage from '../components/container/ContentPage'
import useGetUserID from '../services/auth/useGetUserID'
import useGetBin from '../services/bin/useGetBin'
import checkLogin from '../utils/checkLogin'

function BinPage() {

    const { tokenInfo } = checkLogin()
    console.log('name :', tokenInfo?.preferred_username)
    const { userID } = useGetUserID(tokenInfo?.preferred_username)
    const { binContent } = useGetBin(userID)
    console.log('userID :', userID)
    console.log('binContent :', binContent)
    return (
        <>
            <ContentPage titlePage="Bin" data={binContent} />
            {/* <EmptyPage titlePage="Recent" /> */}
        </>
    )
}

export default BinPage
