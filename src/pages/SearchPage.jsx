
import { useParams } from 'react-router-dom'
import ContentPage from '../components/container/ContentPage'
import useGetSearch from './../services/search/useGetSearch';

function SearchPage() {

    const { keyWord } = useParams()

    console.log('keyword :', keyWord)
    const { searchData } = useGetSearch(keyWord)
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
