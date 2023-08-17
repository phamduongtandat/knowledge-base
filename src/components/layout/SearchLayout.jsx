import React from 'react'

function SearchLayout() {
    return (
        <form className=" flex items-center py-1 pl-2 rounded-xl flex-1 bg-kb-neutral-white kb-shadow-white-bg px-3">

            <button>
                <div className="w-[34px] h-[34px] bg-kb-primary-gradient flex justify-center items-center rounded-md border-none text-kb-neutral-white ">
                    <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                </div>
            </button>

            <input className="font-[0.9rem] bg-transparent w-full h-full py-2.5 px-3 outline-none " placeholder="Search Folder" />

        </form>

    )
}

export default SearchLayout
