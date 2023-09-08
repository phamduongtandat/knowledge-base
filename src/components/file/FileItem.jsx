import AvatarFile from './avatarFile'
import Download from '../../assets/image/download.png'
import Dot from '../../assets/image/dot.svg'
import UserAva from '../../assets/image/userava.png'
import useDownloadFile from '../../services/home/useDownloadFile';
import ArticleOnwerOption from '../optionDropdown/ArticleOnwerOption';
import BinOpt from '../optionDropdown/BinOpt';
import { useState } from 'react';
import formatDate from './../../utils/formatDate';
function FileItem({ data, articleID, setAticleID, itemID, titlePage }) {


    const [isFileOnwerOption, setIsFileOnwerOption] = useState(false)
    return (
        <div className={`relative self-stretch flex w-full justify-center items-center md:rounded-[0.42188rem] md:gap-[0.70313rem]  md:px-[0.5rem] md:py-[0.25rem] 2xl:px-[0.5rem] 2xl:py-[0.4rem] 2xl:rounded-[0.6rem] 2xl:gap-[1rem]
        ${isFileOnwerOption && articleID === itemID ? 'bg-blue-200/50' : 'kb-shadow-white-bg'}
        `}>

            <AvatarFile name={data?.name} />

            <div className="flex justify-between items-start flex-[1_0_0] self-stretch">
                <div className="flex flex-col items-center md:gap-[0.1875rem] 2xl:gap-[0.3rem] flex-[1_0_0]">
                    <div className="flex items-start md:gap-[0.5625rem] 2xl:gap-[0.85rem] self-stretch">
                        <div className="p1-b kb-text-primary-gradient">
                            {data?.parentName}
                        </div>
                    </div>

                    <h4 className="self-stretch text-kb-second-color">
                        {data?.name}
                    </h4>

                    {/* <div
                        className="self-stretch w-3 border "
                        title='Download File'
                    >

                        <img
                            onClick={() => {downloadFile(data?.id) }}
                            src={Download}
                        //width={15}
                        />

                    </div> */}
                </div>

                <div className="flex flex-col items-end justify-center py-2 gap-1 self-stretch">
                    <img
                        className="md:w-6 md:h-6 2xl:w-9 2xl:h-9 rounded-3xl border border-kb-primary-color"
                        src={UserAva}
                    />

                    <div className="flex flex-col justify-end items-end ">
                        <div className="self-end p2-b text-kb-second-color">
                            {data?.author}
                        </div>
                        <div className="self-end text-kb-neutral-300 p3-r">
                            {formatDate(data?.createAt)}
                        </div>
                    </div>
                </div>
            </div>


            {/* THREE DOT */}
            <div className="relative justify-end items-start md:gap-[7.50px] md:w-[15px] md:h-[52px] 2xl:gap-[10.6px] 2xl:w-[21px] 2xl:h-[73.2px]">
                <img
                    src={Dot}
                    onClick={() => {

                        if (isFileOnwerOption && articleID !== itemID) {
                            setIsFileOnwerOption(true)
                            setAticleID(itemID)
                            return
                        }
                        setAticleID(itemID)
                        setIsFileOnwerOption(!isFileOnwerOption)

                    }}
                    className="cursor-pointer justify-center items-center md:gap-[7.50px] md:w-[15px] md:h-[15px] 2xl:gap-[10.6px] 2xl:w-[21px] 2xl:h-[21px] flex hover:outline-blue-200 hover:outline-double"
                />

                <div className={`absolute md:bottom-0 2xl:bottom-0 right-7 ease-linear duration-200
         ${isFileOnwerOption && articleID === itemID ? '' : 'translate-y-2/4 scale-0'}`}>
                    {titlePage !== 'Bin' && <ArticleOnwerOption info={data} setIsArticleOnwerOption={setIsFileOnwerOption} />}
                    {titlePage === 'Bin' && <BinOpt info={data} setIsArticleOnwerOption={setIsFileOnwerOption} />}
                </div>

            </div>

        </div>
    )
}

export default FileItem
