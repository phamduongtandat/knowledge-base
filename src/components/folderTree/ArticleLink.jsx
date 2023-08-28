

function ArticleLink({ data }) {
    return (
        <div className="flex justify-start items-center gap-2.5 px-2 py-3 rounded-lg">
            <i className="fa-solid fa-book-open fa-sm text-kb-neutral-300"></i>
            <div className="text-kb-neutral-300 l3-b">{data?.name}</div>
        </div>
    )
}

export default ArticleLink
