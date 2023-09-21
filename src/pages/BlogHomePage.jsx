
import { useLocation, useParams } from 'react-router-dom';
import BlogPage from '../components/container/BlogPage';

import useGetArticle from '../services/article/useGetArticle';
import useGetUserID from '../services/auth/useGetUserID';
import checkLogin from '../utils/checkLogin';
import ContentLoader from '../components/loader/ContentLoader';

function BlogHomePage() {

    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { pathname } = useLocation()

    const titlePage = pathname?.split('/')[1]
    const { id } = useParams()
    const { articleContent, isLoading } = useGetArticle(userID, id)
    console.log('articleContent :', articleContent)
    return (
        <div>
            {isLoading && <div className="flex justify-center items-center md:min-h-[476px] 2xl:min-h-[787px] max-h-full">
                <ContentLoader />
            </div>}

            {!isLoading
                && <div className=" ">
                    <BlogPage titlePage={titlePage} data={articleContent} />
                </div>}

        </div>
    )
}

export default BlogHomePage
