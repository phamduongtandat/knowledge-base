
function ArticleOnwerOption() {
    const optionList = [
        { label: 1, name: 'Like', img: 'fa-solid fa-heart fa-sm' },
        { label: 2, name: 'Edit', img: 'fa-solid fa-pen fa-sm' },
        { label: 3, name: 'Rename', img: 'fa-solid fa-pen-to-square fa-sm' },
        { label: 4, name: 'Share', img: 'fa-solid fa-share-nodes fa-sm' },
        { label: 5, name: 'Properties', img: 'fa-solid fa-info fa-sm' },
        { label: 6, name: 'Delete', img: 'fa-solid fa-trash-can fa-sm' },
    ]

    const handleSelect = (label) => {
        console.log(' label:', label)
    }

    return (
        <div className="relative kb-shadow-white-bg w-40 rounded-lg ">

            {optionList.map(({ label, name, img }) => {
                return <div
                    key={label}
                    className="flex  justify-start items-center gap-3 pl-7 py-3 rounded-lg cursor-pointer hover:bg-kb-neutral-50/50 "
                    onClick={() => { handleSelect(label) }}
                >
                    <div className="w-3 flex justify-center shrink-0 text-kb-neutral-300">
                        <i className={` ${img} `}></i>
                    </div>

                    <div className="l3-b text-kb-neutral-300">{name}</div>

                </div>
            })}




        </div>
    )
}

export default ArticleOnwerOption
