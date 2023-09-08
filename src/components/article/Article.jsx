import { useState } from 'react';
import Dot from '../../assets/image/dot.svg'
import BlogAva from '../../assets/image/blogava.png'
import UserAva from '../../assets/image/userava.png'
import ArticleOnwerOption from '../optionDropdown/ArticleOnwerOption';
import BinOpt from '../optionDropdown/BinOpt';
import { useNavigate } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { useDispatch, useSelector } from 'react-redux';
import { turnOnOpt } from '../../redux/optionSlice';


function Article({ titlePage, articleID, setAticleID, itemID, data }) {

  let linkpathArt

  switch (titlePage) {
    case 'Home':
      linkpathArt = '/home'
      break;

    case 'home':
      linkpathArt = '/home'
      break;
    case 'shared':
      linkpathArt = '/shared'
      break;
    case 'Shared history':
      linkpathArt = '/shared'
      break;
    case 'Favourite':
      linkpathArt = '/home'
      break;


    case 'Recent':
      linkpathArt = '/home'
      break;

    case 'Search':
      linkpathArt = '/home'
      break;


    default:


      break;
  }




  const navi = useNavigate()

  const [isArticleOnwerOption, setIsArticleOnwerOption] = useState(false)
  const dispatch = useDispatch()
  const isTurnOnOpt = useSelector(state => state.option.isTurnOnOpt)

  return (

    <div className={`relative self-stretch flex w-full justify-center items-center md:rounded-[0.42188rem] md:gap-[0.70313rem]  md:px-[0.5rem] md:py-[0.25rem] 2xl:px-[0.5rem] 2xl:py-[0.4rem] 2xl:rounded-[0.6rem] 2xl:gap-[1rem]
    ${isArticleOnwerOption && articleID === itemID ? 'bg-blue-200/50' : 'kb-shadow-white-bg'}`}
    >


      <img
        className=" bg-cyan-200/70 md:w-[3.75rem] md:h-[3.75rem]  md:p-0.5 md:rounded-sm 2xl:w-[5.3rem] 2xl:h-[5.3rem] 2xl:p-1 2xl:rounded-xl"
        src={BlogAva}
      />

      <div onClick={() => {
        if (titlePage === 'Bin') {
          return
        }
        navi(`${linkpathArt}/content/page/${itemID}`)
      }} className="flex justify-between items-start flex-[1_0_0] self-stretch">
        <div className="flex flex-col items-center md:gap-[0.1875rem] 2xl:gap-[0.3rem] flex-[1_0_0]">
          <div className="flex items-start md:gap-[0.5625rem] 2xl:gap-[0.85rem] self-stretch">
            <div className="p1-b kb-text-primary-gradient">
              {data?.parentName}
            </div>

            <div className="flex items-center md:gap-[0.23438rem] 2xl:gap-[0.33rem] flex-[1_0_0] self-stretch">
              <i className="fa-solid fa-paperclip md:fa-sm 2xl:fa-xl text-kb-neutral-300"></i>
              <div className="p3-b text-kb-neutral-300">0 files</div>
            </div>
          </div>

          <h4 className="self-stretch text-kb-second-color">
            {data?.name}
          </h4>

          {/* <div className="self-stretch p3-r text-kb-second-color">
            {data?.content}
          </div> */}
        </div>

        <div className="flex flex-col items-end justify-center py-2 gap-1 self-stretch">
          <img
            className="md:w-6 md:h-6 2xl:w-9 2xl:h-w-9 flex-1  md:rounded-3xl border border-kb-primary-color"
            src={UserAva}
          />

          <div className="flex flex-col justify-end items-end">
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
      <div className="relative md:w-[15px] md:h-[52px] md:gap-[7.50px] 2xl:w-[21px] 2xl:h-[73px] 2xl:gap-[10.5px] justify-end items-start ">
        <img
          src={Dot}

          onClick={() => {

            // if (!isTurnOnOpt && isArticleOnwerOption) {
            //   setIsArticleOnwerOption(true)
            //   setAticleID(itemID)
            //   return dispatch(turnOnOpt(true))
            // }

            if (isArticleOnwerOption && articleID !== itemID) {
              setIsArticleOnwerOption(true)
              setAticleID(itemID)
              return
            }
            setAticleID(itemID)
            setIsArticleOnwerOption(!isArticleOnwerOption)

          }}

          className="cursor-pointer justify-center items-center md:w-[15px] md:h-[15px]  md:gap-[7.50px] flex hover:outline-blue-200 hover:outline-double 2xl:w-[21px] 2xl:h-[21px]  2xl:gap-[10.6px]"
        />

        <div className={`absolute md:-bottom-12 2xl:-bottom-16 right-7 ease-linear duration-200
         ${isArticleOnwerOption && articleID === itemID ? '' : 'translate-y-1/4 scale-0'}`}>
          {titlePage !== 'Bin' && <ArticleOnwerOption titlePage={titlePage} info={data} setIsArticleOnwerOption={setIsArticleOnwerOption} />}
          {titlePage === 'Bin' && <BinOpt info={data} setIsArticleOnwerOption={setIsArticleOnwerOption} />}
        </div>

      </div>
    </div>
  );
}

export default Article;
