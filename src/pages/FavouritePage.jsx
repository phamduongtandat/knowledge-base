import ContentPage from "../components/container/ContentPage"
import useGetFavourite from "../services/favourite/useGetFavourite"
import checkLogin from "../utils/checkLogin"


function FavouritePage() {

    const { tokenInfo } = checkLogin()
    const { favouriteContent } = useGetFavourite(tokenInfo?.userID)
    console.log('favouriteContent :', favouriteContent)

    return (
        <>
            <ContentPage titlePage="Favourite" />
            {/* <EmptyPage titlePage="Favourite" /> */}
        </>
    )
}

export default FavouritePage
