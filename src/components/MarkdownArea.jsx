import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MarkdownArea() {
    const [article, setArticle] = useState('')
    console.log(article)

    return (
        <div className="flex gap-2 m-7">
            <textarea
                onChange={(e) => { setArticle(e.target.value) }}
                value={article}
                className="border w-full p-2"
            />

            <div className="w-full min-h-full h-auto border-2 p-7">
                {/* eslint-disable-next-line react/no-children-prop */}
                <ReactMarkdown children={article} remarkPlugins={[remarkGfm]} />
            </div>

        </div>

    )
}

export default MarkdownArea
