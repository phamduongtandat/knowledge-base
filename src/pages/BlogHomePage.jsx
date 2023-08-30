
import { useParams } from 'react-router-dom';
import BlogPage from '../components/container/BlogPage';

import useGetArticle from '../services/article/useGetArticle';

function BlogHomePage() {
    const { id } = useParams()
    const { articleContent } = useGetArticle(id)
    console.log('articleContent :', articleContent)
    return (
        <div>
            <BlogPage titlePage='home' data={articleContent} />

        </div>
    )
}

export default BlogHomePage
