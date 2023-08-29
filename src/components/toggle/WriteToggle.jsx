import Eyes from '../../assets/icon/goldeye.svg'
import Pen from '../../assets/icon/goldpen.svg'

function WriteToggle({ isWrite, setIsWrite }) {
    return (
        <button className={`flex  items-center p-1 w-[2.84rem] h-[1.8rem] rounded-full shadow transition duration-300 focus:outline-none ${isWrite ? 'bg-kb-neutral-50' : 'bg-kb-primary-gradient'}`}>

            <div
                id="switch-toggle"
                className={`flex justify-center items-center text-center p-1 h-[1.6rem] w-[1.6rem]  transform rounded-full  kb-shadow-white-bg  transition duration-200 ${!isWrite ? 'translate-x-[60%]' : 'translate-y-[0.05rem]'}`}
                onClick={() => { setIsWrite(!isWrite) }}
            >
                {isWrite && <img title='Only Blog' src={Pen} className=" w-7 h-7" />}
                {!isWrite && <img title='Only File' src={Eyes} className="w-6 h-6" />}
            </div>
        </button>
    )
}

export default WriteToggle
