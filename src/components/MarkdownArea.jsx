
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MarkdownArea({ isWrite, setArticle, article }) {

    //console.log(article)

    return (
        <>
            <div className="flex min-h-full max-h-fit w-full  ">
                {isWrite && <textarea
                    onChange={(e) => { setArticle(e.target.value) }}
                    value={article || ''}
                    className="  rounded-[0.77919rem] border-[0.779px] border-solid  p-2 outline-none h-screen min-h-full max-h-fit w-full"
                />}



            </div>

            {!isWrite && !!article && <div className=" w-full min-h-full max-h-fit p-2">
                {/* eslint-disable-next-line react/no-children-prop */}
                <ReactMarkdown children={article} remarkPlugins={[remarkGfm]} />
            </div>}
        </>


    )
}

export default MarkdownArea
