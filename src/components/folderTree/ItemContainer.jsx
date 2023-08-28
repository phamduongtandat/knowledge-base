
import FolderLink from './FolderLink'
import FileLink from './FileLink'
import ArticleLink from './ArticleLink'

function ItemContainer({ explore }) {
    let folderLink = explore?.filter(i => i.type === 'folder')
    let articleLink = explore?.filter(i => i.type === 'article')
    let fileLink = explore?.filter(i => i.type === 'file')

    return (

        <div className="overflow-y-scroll  small-scrollbar min-w-[15rem]">
            {folderLink?.map(i => <FolderLink key={i?.id} data={i} />)}
            {fileLink?.map(i => <FileLink key={i?.id} data={i} />)}
            {articleLink?.map(i => <ArticleLink key={i?.id} data={i} />)}
        </div>



    )
}

export default ItemContainer
