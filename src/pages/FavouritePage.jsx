import ContentPage from "../components/container/ContentPage"
import ContentLoader from "../components/loader/ContentLoader"
import useGetUserID from "../services/auth/useGetUserID"
import useGetFavourite from "../services/favourite/useGetFavourite"
import checkLogin from "../utils/checkLogin"


function FavouritePage() {


    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { favouriteContent, isLoading } = useGetFavourite(userID)
    console.log('favouriteContent :', favouriteContent)

    return (
        <>
            {isLoading && <div className="flex justify-center items-center md:min-h-[476px] 2xl:min-h-[787px] max-h-full">
                <ContentLoader />
            </div>}
            {!isLoading && <ContentPage titlePage="Favourite" data={favouriteContent} />}
            {/* <EmptyPage titlePage="Favourite" /> */}
        </>
    )
}

export default FavouritePage
