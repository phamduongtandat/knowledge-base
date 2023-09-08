
import { useLocation, useParams } from 'react-router-dom';
import BlogPage from '../components/container/BlogPage';

import useGetArticle from '../services/article/useGetArticle';
import useGetUserID from '../services/auth/useGetUserID';
import checkLogin from '../utils/checkLogin';

function BlogHomePage() {

    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { pathname } = useLocation()

    const titlePage = pathname?.split('/')[1]
    const { id } = useParams()
    const { articleContent } = useGetArticle(userID, id)
    console.log('articleContent :', articleContent)
    return (
        <div>
            <BlogPage titlePage={titlePage} data={articleContent} />

        </div>
    )
}

export default BlogHomePage
