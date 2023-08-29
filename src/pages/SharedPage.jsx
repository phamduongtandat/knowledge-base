import ContentPage from '../components/container/ContentPage'
import useGetSharePage from '../services/share/useGetSharePage'
import checkLogin from '../utils/checkLogin'

function SharedPage() {
    const { tokenInfo } = checkLogin()
    const { shareContent } = useGetSharePage(tokenInfo?.userID)
    console.log('binContent :', shareContent)

    return (
        <ContentPage titlePage='Shared history' data={shareContent} />
    )
}

export default SharedPage
