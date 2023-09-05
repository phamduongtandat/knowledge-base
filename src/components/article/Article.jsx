import { useState } from 'react';
import Dot from '../../assets/image/dot.svg'
import BlogAva from '../../assets/image/blogava.png'
import UserAva from '../../assets/image/userava.png'
import ArticleOnwerOption from '../optionDropdown/ArticleOnwerOption';
import BinOpt from '../optionDropdown/BinOpt';
import { useNavigate } from 'react-router-dom';
import formatDate from '../../utils/formatDate';


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

  return (
    <div className={`relative flex w-full rounded-[0.42188rem] justify-center items-center gap-[0.70313rem] self-stretch p-[0.70313rem] 
    ${isArticleOnwerOption && articleID === itemID ? 'bg-blue-200/50' : 'kb-shadow-white-bg'}`}
    >


      <img
        className="self-stretch w-[3.75rem] h-[3.75rem] bg-cyan-200/70 p-0.5 rounded-sm"
        src={BlogAva}
      />

      <div onClick={() => { navi(`${linkpathArt}/content/page/${itemID}`) }} className="flex justify-between items-start flex-[1_0_0] self-stretch">
        <div className="flex flex-col items-center gap-[0.1875rem] flex-[1_0_0]">
          <div className="flex items-start gap-[0.5625rem] self-stretch">
            <div className="p1-b kb-text-primary-gradient">
              {data?.parentName}
            </div>

            <div className="flex items-center gap-[0.23438rem] flex-[1_0_0] self-stretch">
              <i className="fa-solid fa-paperclip fa-sm text-kb-neutral-300"></i>
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

            if (isArticleOnwerOption && articleID !== itemID) {
              setIsArticleOnwerOption(true)
              setAticleID(itemID)
              return
            }
            setAticleID(itemID)
            setIsArticleOnwerOption(!isArticleOnwerOption)

          }}
          className="cursor-pointer w-[15px] h-[15px] justify-center items-center gap-[7.50px] flex hover:outline-blue-200 hover:outline-double"
        />

        <div className={`absolute bottom-7 right-7 ease-linear duration-200
         ${isArticleOnwerOption && articleID === itemID ? '' : 'translate-y-2/4 scale-0'}`}>
          {titlePage !== 'Bin' && <ArticleOnwerOption info={data} setIsArticleOnwerOption={setIsArticleOnwerOption} />}
          {titlePage === 'Bin' && <BinOpt info={data} setIsArticleOnwerOption={setIsArticleOnwerOption} />}
        </div>

      </div>
    </div>
  );
}

export default Article;
