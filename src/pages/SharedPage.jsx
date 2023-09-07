import ContentPage from '../components/container/ContentPage'
import useGetUserID from '../services/auth/useGetUserID'
import useGetSharePage from '../services/share/useGetSharePage'
import checkLogin from '../utils/checkLogin'

function SharedPage() {

    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { shareContent } = useGetSharePage(userID)
    console.log('shareContent :', shareContent)
    localStorage.setItem('isSPage', JSON.stringify('Shared history'))
    return (
        <ContentPage titlePage='Shared history' data={shareContent} />
    )
}

export default SharedPage
