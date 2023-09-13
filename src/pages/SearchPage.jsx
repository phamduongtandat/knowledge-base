
import { useParams } from 'react-router-dom'
import ContentPage from '../components/container/ContentPage'
import useGetSearch from './../services/search/useGetSearch';
import checkLogin from '../utils/checkLogin';
import useGetUserID from '../services/auth/useGetUserID';
import ContentLoader from '../components/loader/ContentLoader';

function SearchPage() {

    const { keyWord } = useParams()
    console.log(' keyWord:', keyWord)
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { searchData, isLoading } = useGetSearch(userID, keyWord)
    console.log('searchData :', searchData)
    return (
        <>
            {isLoading && <div className="flex justify-center items-center md:min-h-[476px] 2xl:min-h-[787px] max-h-full">
                <ContentLoader />
            </div>}

            {
                (searchData?.length === 0 && !isLoading)
                    ? <h2 className="p-7 md:min-h-[476px] 2xl:min-h-[787px] max-h-full">No result with key word : {keyWord}, Please try with the others </h2>
                    : <ContentPage titlePage="Search" data={searchData} />
            }


        </>
    )
}

export default SearchPage
