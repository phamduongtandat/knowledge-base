import ContentPage from '../components/container/ContentPage'
import ContentLoader from '../components/loader/ContentLoader'
import useGetUserID from '../services/auth/useGetUserID'
import useGetSharePage from '../services/share/useGetSharePage'
import checkLogin from '../utils/checkLogin'

function SharedPage() {

    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { shareContent, isLoading } = useGetSharePage(userID)
    console.log('shareContent :', shareContent)
    localStorage.setItem('isSPage', JSON.stringify('Shared history'))
    return (

        <>
            {isLoading && <div className="flex justify-center items-center md:min-h-[476px] 2xl:min-h-[787px] max-h-full">
                <ContentLoader />
            </div>}
            {!isLoading && <ContentPage titlePage='Shared history' data={shareContent} />}
        </>
    )
}

export default SharedPage
