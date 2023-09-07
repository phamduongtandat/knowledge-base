
import Home from '../../assets/icon/home.svg'
import Shared from '../../assets/icon/Share.svg'
import Favorite from '../../assets/icon/heart.svg'
import Recent from '../../assets/icon/Clock.svg'
import Bin from '../../assets/icon/bin.svg'
import Arrow from '../../assets/icon/arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom'

function PageTitleLayout({ titlePage, headerChart }) {
    const navi = useNavigate()
    console.log('titlePage :', titlePage)

    const { pathname } = useLocation()
    const local = pathname?.split('/')[1]
    const idpath = pathname?.split('/').pop()
    let isSPage = JSON.parse(localStorage.getItem('isSPage')) || 'Shared history'
    console.log(' local:', local)

    if (headerChart?.length === 2 && local === 'shared' && isSPage === 'Shared history') {
        headerChart.shift()
        localStorage.setItem('isSPage', JSON.stringify(idpath))
    }

    if (headerChart?.length === 2 && local === 'shared' && isSPage === idpath) {
        headerChart.shift()
        localStorage.setItem('isSPage', JSON.stringify(idpath))
    }


    console.log('headerChart :', headerChart)
    return (


        <div className="flex items-center 2xl:gap-2.5 md:gap-[0.444rem]">

            {titlePage === 'home' && local !== 'shared' && <img src={Home} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />}

            {(titlePage === 'shared' || local === 'shared') && <img src={Shared} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />}

            {titlePage === 'recent' && <img src={Recent} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />}

            {titlePage === 'favourite' && <img src={Favorite} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />}

            {titlePage === 'bin' && <img src={Bin} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />}

            {/* {titlePage === 'shared' && <img src={Shared} className="flex  flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />} */}


            {headerChart?.map((i, index) => {
                return <div key={index} className="flex items-center 2xl:gap-2.5 md:gap-[0.444rem]">
                    <img src={Arrow} className="flex  rotate-360 flex-col justify-center items-center 2xl:w-5 2xl:h-5 2xl:gap-2.5 md:w-[0.9rem] md:h-[0.9rem] md:gap-[0.444rem]" />

                    <div
                        onClick={() => {
                            if (index === 1 || headerChart?.length === 1) {
                                return
                            }
                            navi(`/${titlePage}/content/${i?.id}`)
                        }}
                        className="l3-b text-kb-neutral-300 hover:text-blue-700 hover:underline cursor-pointer"
                    >
                        {i?.name?.length >= 20 ? i?.name.slice(0, 20) + '...' : i?.name}
                    </div>
                </div>
            })
            }


        </div>
    )
}

export default PageTitleLayout
