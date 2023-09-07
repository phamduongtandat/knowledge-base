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
        <div className={`relative flex w-full rounded-[0.42188rem] justify-start items-start gap-[0.70313rem] p-2 kb-shadow-white-bg`}>

            <AvatarFile name={data?.name} />

            <div className="flex justify-between items-start flex-[1_0_0] self-stretch">
                <div className="flex flex-col items-center gap-[0.1875rem] flex-[1_0_0]">
                    <div className="flex items-start gap-[0.5625rem] self-stretch">
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

                <div className="flex flex-col justify-between items-end self-stretch">
                    <img
                        className="w-6 h-6 rounded-3xl border border-kb-primary-color"
                        src={UserAva}
                    />

                    <div className="flex flex-col justify-end items-end flex-[1_0_0]">
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
            <div className="relative w-[15px] h-[52px] justify-end items-start gap-[7.50px]">
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
                    className="cursor-pointer w-[15px] h-[15px] justify-center items-center gap-[7.50px] flex hover:outline-blue-200 hover:outline-double"
                />

                <div className={`absolute bottom-7 right-7 ease-linear duration-200
         ${isFileOnwerOption && articleID === itemID ? '' : 'translate-y-2/4 scale-0'}`}>
                    {titlePage !== 'Bin' && <ArticleOnwerOption info={data} setIsArticleOnwerOption={setIsFileOnwerOption} />}
                    {titlePage === 'Bin' && <BinOpt info={data} setIsArticleOnwerOption={setIsFileOnwerOption} />}
                </div>

            </div>

        </div>
    )
}

export default FileItem
