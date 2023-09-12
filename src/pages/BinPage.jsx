
import ContentPage from '../components/container/ContentPage'
import ContentLoader from '../components/loader/ContentLoader'
import useGetUserID from '../services/auth/useGetUserID'
import useGetBin from '../services/bin/useGetBin'
import checkLogin from '../utils/checkLogin'

function BinPage() {

    const { tokenInfo } = checkLogin()
    console.log('name :', tokenInfo?.preferred_username)
    const { userID } = useGetUserID(tokenInfo?.preferred_username)
    const { binContent, isLoading } = useGetBin(userID)
    console.log('userID :', userID)
    console.log('binContent :', binContent)
    return (
        <>
            {isLoading && <div className="flex justify-center items-center md:min-h-[476px] 2xl:min-h-[787px] max-h-full">
                <ContentLoader />
            </div>}
            {!isLoading && <ContentPage titlePage="Bin" data={binContent} />}
            {/* <EmptyPage titlePage="Recent" /> */}
        </>
    )
}

export default BinPage
