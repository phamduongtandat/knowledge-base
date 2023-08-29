
import ContentPage from '../components/container/ContentPage'
import useGetBin from '../services/bin/useGetBin'
import checkLogin from '../utils/checkLogin'

function BinPage() {
    const { tokenInfo } = checkLogin()
    const { binContent } = useGetBin(tokenInfo?.userID)
    console.log('binContent :', binContent)
    return (
        <>
            <ContentPage titlePage="Bin" data={binContent} />
            {/* <EmptyPage titlePage="Recent" /> */}
        </>
    )
}

export default BinPage
