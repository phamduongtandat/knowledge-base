import { useState } from "react"
import Blog from '../../assets/icon/blog.svg'
import File from '../../assets/icon/file.svg'
function FileToggle() {
    const [isBlog, setIsBlog] = useState(true)
    return (
        <button className={`flex w-[4rem] h-[2.5rem] items-center p-1 rounded-full shadow transition duration-300 focus:outline-none ${isBlog ? 'bg-kb-neutral-50' : 'bg-kb-primary-gradient'}`}>

            <div
                id="switch-toggle"
                className={`flex justify-center items-center text-center p-1 h-[2.2rem] w-[2.2rem]  transform rounded-full  kb-shadow-white-bg  transition duration-200 ${!isBlog ? 'translate-x-[60%]' : 'translate-y-[0.05rem]'}`}
                onClick={() => { setIsBlog(!isBlog) }}
            >
                {isBlog && <img title='Only Blog' src={Blog} className=" w-7 h-7" />}
                {!isBlog && <img title='Only File' src={File} className="w-6 h-6" />}
            </div>
        </button>

    )
}

export default FileToggle
