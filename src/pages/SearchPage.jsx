
import { useParams } from 'react-router-dom'
import ContentPage from '../components/container/ContentPage'
import useGetSearch from './../services/search/useGetSearch';
import checkLogin from '../utils/checkLogin';
import useGetUserID from '../services/auth/useGetUserID';

function SearchPage() {

    const { keyWord } = useParams()

    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { searchData } = useGetSearch(userID, keyWord)
    console.log('searchData :', searchData)
    return (
        <>
            {
                searchData?.length === 0
                    ? <h2 className="p-7">No result with key word : {keyWord}, Please try with the others </h2>
                    : <ContentPage titlePage="Search" data={searchData} />
            }


        </>
    )
}

export default SearchPage
