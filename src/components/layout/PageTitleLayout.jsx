
import Home from '../../assets/icon/home.svg'
import Shared from '../../assets/icon/Share.svg'
import Favorite from '../../assets/icon/heart.svg'
import Recent from '../../assets/icon/Clock.svg'
import Bin from '../../assets/icon/bin.svg'
import Arrow from '../../assets/icon/arrow.svg'

function PageTitleLayout({ titlePage, headerChart }) {

    //const {titleChart,setTitleChart}=useContext(AddPopupContext)
    return (


        <div className="flex items-center 2xl:gap-2.5 md:gap-[0.444rem]">

            {titlePage === 'home' && <img src={Home} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />}

            {titlePage === 'shared' && <img src={Shared} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />}

            {titlePage === 'recent' && <img src={Recent} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />}

            {titlePage === 'favourite' && <img src={Favorite} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />}

            {titlePage === 'bin' && <img src={Bin} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />}

            {/* {titlePage === 'shared' && <img src={Shared} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />} */}


            {headerChart?.map((i, index) => {
                return <div key={index} className="flex items-center 2xl:gap-2.5 md:gap-[0.444rem]">
                    <img src={Arrow} className="flex  rotate-360 flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />

                    <div className="l3-b text-kb-neutral-300">{i}</div>
                </div>
            })
            }


        </div>
    )
}

export default PageTitleLayout
