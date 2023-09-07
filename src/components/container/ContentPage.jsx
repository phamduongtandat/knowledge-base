
import Article from "../article/Article";
import HeaderContent from "./HeaderContent";
import Folder from "../../assets/image/folder.png";
import Dot from "../../assets/image/dot.svg";
import Expand from "../../assets/icon/expand.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import CategogyOwnerOpt from "../optionDropdown/CategogyOwnerOpt";
import BinOpt from "../optionDropdown/BinOpt";


import FileItem from "../file/FileItem";
import { useDispatch, useSelector } from "react-redux";
import { turnOnOpt } from "../../redux/optionSlice";




function ContentPage({ data, titlePage, headerChart, isAll, setIsAll }) {

  // if(titlePage==='Shared history' )
  console.log(' headerChart:', headerChart)

  console.log('titlePage :', titlePage)
  let linkpath

  switch (titlePage) {
    case 'Home':
      linkpath = '/home/content'
      break;

    case 'home':
      linkpath = '/home/content'
      break;
    case 'shared':
      linkpath = '/shared/content'
      break;
    case 'Shared history':
      linkpath = '/shared/content'
      break;


    case 'Recent':
      linkpath = '/home/content'
      break;

    case 'recent':
      linkpath = '/recent/content'
      break;


    case 'favourite':
      linkpath = '/favourite/content'
      break;

    case 'Search':
      linkpath = '/home/content'
      break;


    default:


      break;
  }



  let folder = data?.filter(i => i.type === "folder")
  let article = data?.filter(i => i.type === "article")
  const file = data?.filter(i => i.type === "file")
  const isBlog = useSelector(state => state.filter.isBlog)
  if (!isBlog) {
    folder = []
    article = []
  }

  const dispatch = useDispatch()

  const isTurnOnOpt = useSelector(state => state.option.isTurnOnOpt)

  const [CategOpt, setCategOpt] = useState({ isOpen: false, itemID: '' })
  const [articleID, setAticleID] = useState('');

  const [isExpand, setIsExpand] = useState(false);



  const containerRef = useRef();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    if (titlePage !== 'Home') {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      let isOverflowing = false;


      for (const child of container.children) {

        const childRect = child.getBoundingClientRect();
        if (childRect.bottom > containerRect.bottom) {
          isOverflowing = true;
          break;
        }
      }
      setShowButton(isOverflowing);
    }

  }, [data]);




  return (


    <div className="relative">

      <HeaderContent titlePage={titlePage} headerChart={headerChart} isAll={isAll} setIsAll={setIsAll} />

      {/* FOLDER LIST */}
      {titlePage !== 'Home' && showButton && !isExpand && (
        <img
          src={Expand}
          className="absolute right-7 top-20 w-8 rotate-180 rounded-md z-10 opacity-80 hover:opacity-100 bg-kb-primary-color "
          onClick={() => {
            setIsExpand(!isExpand);
          }}
        />
      )}

      <div
        id="folderBackground"
        onClick={({ target }) => {
          if (target.id === 'folderBackground') {
            dispatch(turnOnOpt(false))
          }
        }}

        ref={containerRef}
        className={`flex relative  gap-[1.125rem] px-[1.6875rem] w-full py-4 flex-wrap
        ${titlePage !== 'Home' && showButton ? 'overflow-hidden' : ''}
        ${isExpand ? "max-h-fit overflow-visible" : "max-h-[8rem]"
          }`}
      >

        {/* FOLDER */}
        {folder?.map((i) => {
          return (
            <div

              key={i.id}
              className={`relative flex min-w-[8.39063rem]  h-[6.09375rem] justify-center items-center p-[0.9375rem] rounded-md  ${isTurnOnOpt && CategOpt.isOpen && CategOpt.itemID === i.id ? 'bg-blue-200/50' : 'kb-shadow-white-bg'}`}
            >
              {
                titlePage !== 'Bin'
                  ? <Link to={`${linkpath}/${i.id}`} className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch">
                    <div className="flex flex-col gap-2 justify-between items-start flex-[1_0_0]">
                      <img className="w-12 h-[2.10938rem]" src={Folder} />

                      <div className="flex flex-col items-start text-kb-second-color">
                        <div className="l3-b">{i?.name?.length >= 20 ? i?.name.slice(0, 20) + '...' : i?.name}</div>
                        <div className="l3-r">{i?.quantity} files</div>
                      </div>
                    </div>
                  </Link>
                  : <div className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch">
                    <div className="flex flex-col gap-2 justify-between items-start flex-[1_0_0]">
                      <img className="w-12 h-[2.10938rem]" src={Folder} />

                      <div className="flex flex-col items-start text-kb-second-color">
                        <div className="l3-b">{i?.name?.length >= 20 ? i?.name.slice(0, 20) + '...' : i?.name}</div>
                        <div className="l3-r">{i?.quantity} files</div>
                      </div>
                    </div>
                  </div>
              }

              <div
                onClick={() => {
                  if (!isTurnOnOpt && (CategOpt.isOpen || !CategOpt.isOpen)) {
                    setCategOpt({ itemID: i.id, isOpen: true })
                    return dispatch(turnOnOpt(true))
                  }

                  if (CategOpt.itemID !== i.id && CategOpt.isOpen) {
                    return setCategOpt({ itemID: i.id, isOpen: true })
                  }
                  setCategOpt({ itemID: i.id, isOpen: !CategOpt.isOpen })
                }}
                className="flex justify-center items-start gap-[0.46875rem] self-stretch hover:outline-blue-200 hover:outline-double h-fit px-2 cursor-pointer"
              >
                <img
                  className="  w-1.5" src={Dot}

                />

                <div className={`z-50 ease-linear duration-200
                ${titlePage !== 'Home' && showButton && !isExpand ? 'fixed -translate-x-2/3 -translate-y-2/3 ' : 'absolute bottom-2/3 right-1/4'}
                ${isTurnOnOpt && CategOpt.isOpen && CategOpt.itemID === i.id ? '' : 'translate-x-1/4 translate-y-1/3 scale-0'}`}
                >
                  {titlePage !== 'Bin' && <CategogyOwnerOpt titlePage={titlePage} setCategOpt={setCategOpt} info={i} />}
                  {titlePage === 'Bin' && <BinOpt info={i} />}
                </div>

              </div>
            </div>
          );
        })}

        {isExpand && (
          <img
            src={Expand}
            className="absolute rounded-md w-8 z-10 opacity-70 hover:opacity-100 bg-kb-primary-color right-7 bottom-2"
            onClick={() => {
              setIsExpand(!isExpand);
            }}
          />
        )}
      </div>

      {/* ARTICLE LIST */}
      <div className="flex bottom-auto w-full items-start content-start gap-[1.5rem_1.125rem] flex-1 self-stretch px-[1.6875rem] ">
        <div className="flex flex-col items-start gap-[1.875rem] flex-[1_0_0] px-0 py-2 rounded-md">


          <div className="flex flex-col self-stretch items-start content-start  w-auto gap-[1.125rem] ">
            {article?.map((i) => <Article key={i.id} articleID={articleID} setAticleID={setAticleID} data={i} itemID={i.id} titlePage={titlePage} />)}

          </div>
        </div>
      </div>

      {/* FILE LIST */}

      <div className="flex flex-col items-start gap-5 flex-[1_0_0] px-[1.6875rem] mt-3 rounded-md mb-4">
        {file?.map(i => <FileItem key={i?.id} data={i} articleID={articleID} setAticleID={setAticleID} itemID={i?.id} titlePage={titlePage} />)}
      </div>

    </div>
  );
}

export default ContentPage;