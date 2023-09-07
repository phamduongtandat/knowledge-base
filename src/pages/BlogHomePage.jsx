
import { useLocation, useParams } from 'react-router-dom';
import BlogPage from '../components/container/BlogPage';

import useGetArticle from '../services/article/useGetArticle';

function BlogHomePage() {
    const { pathname } = useLocation()

    const titlePage = pathname?.split('/')[1]
    const { id } = useParams()
    const { articleContent } = useGetArticle(id)
    console.log('articleContent :', articleContent)
    return (
        <div>
            <BlogPage titlePage={titlePage} data={articleContent} />

        </div>
    )
}

export default BlogHomePage
