import React from 'react'

function FileFilterOpt() {
    const optionList = [

        { label: 1, name: 'All' },
        { label: 2, name: 'PDF' },
        { label: 3, name: 'DOC' },
        { label: 4, name: 'XLS' },
        { label: 5, name: 'Img' },
        { label: 6, name: 'Zip' },
        { label: 7, name: 'Code' },

    ]

    const handleSelect = (label) => {
        console.log(' label:', label)
    }

    return (
        <div className="relative kb-shadow-white-bg w-36 rounded-lg ">

            {optionList.map(({ label, name, }) => {
                return <div
                    key={label}
                    className="flex  justify-start items-center gap-3 pl-7 py-3 rounded-lg hover:bg-kb-neutral-50/50 "
                    onClick={() => { handleSelect(label) }}
                >
                    <input type="checkbox" name="" id="" />
                    <div className="l3-b text-kb-neutral-300">{name}</div>
                </div>
            })}




        </div>
    )
}

export default FileFilterOpt
