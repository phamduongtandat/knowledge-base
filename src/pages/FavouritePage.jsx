import ContentPage from "../components/container/ContentPage"
import useGetUserID from "../services/auth/useGetUserID"
import useGetFavourite from "../services/favourite/useGetFavourite"
import checkLogin from "../utils/checkLogin"


function FavouritePage() {


    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { favouriteContent } = useGetFavourite(userID)
    console.log('favouriteContent :', favouriteContent)

    return (
        <>
            <ContentPage titlePage="Favourite" data={favouriteContent} />
            {/* <EmptyPage titlePage="Favourite" /> */}
        </>
    )
}

export default FavouritePage
