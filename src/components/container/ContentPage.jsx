
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
import { turnOnArtOpt, turnOnFiletOpt, turnOnOpt } from "../../redux/optionSlice";




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




  const refContent = useRef()
  //console.log(' refMain:', refContent?.current?.getBoundingClientRect().right)

  const [isChangeFolderPos, setIsChangeFolderPos] = useState(false)
  //const [isChangeArtrPos, setIsChangeArtPos] = useState(false)

  //console.log('isChangeFolderPos :', isChangeFolderPos)
  return (



    <div

      id="allCntBackground"
      onClick={({ target }) => {
        if (target.id === 'allCntBackground') {
          dispatch(turnOnOpt(false))
          dispatch(turnOnArtOpt(false))
          dispatch(turnOnFiletOpt(false))
        }
      }}

      ref={refContent} className="relative md:min-h-[476px] 2xl:min-h-[787px] max-h-full" >

      <HeaderContent titlePage={titlePage} headerChart={headerChart} isAll={isAll} setIsAll={setIsAll} />

      {/* FOLDER LIST */}

      {titlePage !== 'Home' && showButton && !isExpand && (
        <img
          src={Expand}
          className="absolute md:right-7 md:top-20 md:w-8 2xl:right-10 2xl:top-28 2xl:w-11 rotate-180 rounded-md z-10 opacity-80 hover:opacity-100 bg-kb-primary-color "
          onClick={() => {
            setIsExpand(!isExpand);
          }}
        />
      )
      }

      <div
        id="folderBackground"
        onClick={({ target }) => {
          if (target.id === 'folderBackground') {
            dispatch(turnOnOpt(false))
            dispatch(turnOnArtOpt(false))
            dispatch(turnOnFiletOpt(false))
          }
        }}

        ref={containerRef}
        className={`flex relative  md:gap-[1.125rem] md:px-[1.6875rem]  md:py-4 2xl:gap-[1.6rem] 2xl:px-[2.4rem]  2xl:py-6 flex-wrap w-full
        ${titlePage !== 'Home' && showButton ? 'overflow-hidden' : ''}
        ${isExpand ? "max-h-fit overflow-visible" : "md:max-h-[8rem] 2xl:max-h-[11rem]"
          }`}
      >

        {/* FOLDER */}
        {folder?.map((i) => {
          return (
            <div

              key={i.id}
              className={`relative flex justify-center items-center md:min-w-[8.39063rem] md:h-[6.09375rem]  md:p-[0.9375rem] 2xl:min-w-[12rem] 2xl:h-[8.5rem]  2xl:p-[1.3rem] rounded-md  ${isTurnOnOpt && CategOpt.isOpen && CategOpt.itemID === i.id ? 'bg-blue-200/50' : 'kb-shadow-white-bg'}`}
            >
              {
                titlePage !== 'Bin'
                  ? <Link to={`${linkpath}/${i.id}`} className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch">
                    <div
                      title={i?.name}
                      className="flex flex-col md:gap-2 2xl:gap-3 justify-between items-start flex-[1_0_0] "
                    >
                      <img className="md:w-12 md:h-[2.10938rem] 2xl:w-14 2xl:h-[2.5rem]" src={Folder} />

                      <div className="flex flex-col items-start text-kb-second-color ">
                        <div className="l3-b truncate md:w-[100px] 2xl:w-[141px] ">{i?.name}</div>
                        <div className="l3-r">{i?.quantity} files</div>
                      </div>
                    </div>
                  </Link>
                  : <div
                    title={i?.name}
                    className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch"
                  >
                    <div className="flex flex-col md:gap-2 2xl:gap-3 justify-between items-start flex-[1_0_0]">
                      <img className="md:w-12 md:h-[2.10938rem] 2xl:w-16 2xl:h-[3rem]" src={Folder} />

                      <div className="flex flex-col items-start text-kb-second-color">
                        <div className="l3-b truncate md:w-[100px] 2xl:w-[141px]">{i?.name}</div>
                        <div className="l3-r">{i?.quantity} files</div>
                      </div>
                    </div>
                  </div>
              }

              <div
                onClick={(e) => {

                  if (e.clientX >= (refContent?.current?.getBoundingClientRect().right - 150)) {
                    setIsChangeFolderPos(true)
                  } else {
                    setIsChangeFolderPos(false)
                  }

                  dispatch(turnOnFiletOpt(false))
                  dispatch(turnOnArtOpt(false))
                  if (!isTurnOnOpt && (CategOpt.isOpen || !CategOpt.isOpen)) {
                    setCategOpt({ itemID: i.id, isOpen: true })
                    return dispatch(turnOnOpt(true))
                  }

                  if (CategOpt.itemID !== i.id && CategOpt.isOpen) {
                    return setCategOpt({ itemID: i.id, isOpen: true })
                  }
                  setCategOpt({ itemID: i.id, isOpen: !CategOpt.isOpen })
                }}
                className="flex justify-center items-start self-stretch hover:outline-blue-200 hover:outline-double h-fit md:px-2  md:gap-[0.46875rem] 2xl:px-3  2xl:gap-[0.7rem] cursor-pointer"
              >
                <img
                  className="  md:w-1.5 2xl:w-2" src={Dot}

                />

                <div

                  className={`z-50 ease-linear duration-200 mt-3

                ${titlePage !== 'Home' && showButton && !isExpand ? `${isChangeFolderPos ? 'fixed -translate-x-1/2 translate-y-2 ' : 'fixed translate-x-1/2 translate-y-2 '} ` : `${isChangeFolderPos ? 'absolute top-1/4 md:right-7 2xl:right-7' : 'absolute top-1/4 md:-right-32 2xl:-right-44 '}`}

                ${isTurnOnOpt && CategOpt.isOpen && CategOpt.itemID === i.id ? '' : '-translate-x-1/4 -translate-y-1/3 scale-0'}`}
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
            className="absolute rounded-md  z-10 opacity-70 hover:opacity-100 bg-kb-primary-color md:right-7 md:bottom-2 md:w-8 2xl:right-10 2xl:bottom-3 2xl:w-11"
            onClick={() => {
              setIsExpand(!isExpand);
            }}
          />
        )}
      </div>

      {/* ARTICLE LIST */}
      <div
        id="articleContainer"
        onClick={({ target }) => {
          if (target.id === 'articleContainer') {
            dispatch(turnOnOpt(false))
            dispatch(turnOnArtOpt(false))
            dispatch(turnOnFiletOpt(false))
          }
        }}

        className="flex bottom-auto w-full items-start content-start flex-1 self-stretch md:px-[1.6875rem] md:gap-[1.5rem_1.125rem] 2xl:px-[2.4rem] 2xl:gap-[2rem_1.6rem]">

        <div

          id="articleBackground"
          onClick={({ target }) => {
            if (target.id === 'articleBackground') {
              dispatch(turnOnOpt(false))
              //dispatch(turnOnArtOpt(false))
            }
          }}
          className="flex flex-col items-start  rounded-md  flex-[1_0_0] md:py-2 md:gap-[1.875rem] 2xl:py-3 2xl:gap-[2.64rem]">


          <div className="flex flex-col self-stretch items-start content-start  w-auto md:gap-[1.125rem] 2xl:gap-[1.6rem] ">
            {article?.map((i) => <Article refBottom={refContent?.current?.getBoundingClientRect().bottom} key={i.id} articleID={articleID} setAticleID={setAticleID} data={i} itemID={i.id} titlePage={titlePage} />)}

          </div>
        </div>
      </div>

      {/* FILE LIST */}

      <div

        id="fileContainer"
        onClick={({ target }) => {
          if (target.id === 'fileContainer') {
            dispatch(turnOnOpt(false))
            dispatch(turnOnArtOpt(false))
            dispatch(turnOnFiletOpt(false))
          }
        }}

        className="flex flex-col items-start flex-[1_0_0] rounded-md md:px-[1.6875rem] md:mt-3  md:gap-5  md:mb-4 2xl:px-[2.4rem] 2xl:mt-3.5  2xl:gap-7  2xl:mb-6">
        {file?.map(i => <FileItem key={i?.id} data={i} articleID={articleID} setAticleID={setAticleID} itemID={i?.id} titlePage={titlePage} refBottom={refContent?.current?.getBoundingClientRect().bottom} />)}
      </div>

    </div >
  );
}

export default ContentPage;