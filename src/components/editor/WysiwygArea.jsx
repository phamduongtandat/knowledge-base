import { useRef, } from 'react'

import JoditEditor from 'jodit-react';

function WysiwygArea({ isWrite, setArticle, article }) {

    const config =
    {
        readonly: false,
        minHeight: '770',
    }

    const editor = useRef(null);

    console.log('content :', article)

    return (
        <div className="min-h-full max-h-fit w-full">

            {isWrite && <JoditEditor
                config={config}
                ref={editor}
                value={article}
                onChange={newContent => { setArticle(newContent) }}
            />}

            {!isWrite && <div dangerouslySetInnerHTML={{ __html: article }}></div>}
        </div>

    )
}

export default WysiwygArea

