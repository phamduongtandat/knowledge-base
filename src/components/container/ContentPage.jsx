import Article from "../article/Article";
import HeaderContent from "./HeaderContent";
import Folder from "../../assets/image/folder.png";
import Dot from "../../assets/image/dot.svg";
import Expand from "../../assets/icon/expand.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import CategogyOwnerOpt from "../optionDropdown/CategogyOwnerOpt";
import PopupContainer from "./PopupContainer";
import RenamePopup from "../popup/RenamePopup";
import ProperPopup from "../popup/ProperPopup";
import { useSelector } from "react-redux";



function ContentPage({ data, titlePage, headerChart, isAll, setIsAll }) {


  const isProper = useSelector(state => state.popup.isProper)
  const isRename = useSelector(state => state.popup.isRename)

  // console.log('titleChart :', titleChart)
  let linkpath
  //console.log('titlePage :', titlePage)
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
    case 'recent':
      linkpath = '/recent/content'
      break;
    case 'favourite':
      linkpath = '/favourite/content'
      break;
    case 'bin':
      linkpath = '/bin/content'
      break;


    default:


      break;
  }



  const folder = data?.filter(i => i.type === "folder")
  const article = data?.filter(i => i.type === "article")
  const [CategOpt, setCategOpt] = useState({ isOpen: false, itemID: '' })
  const [articleID, setAticleID] = useState('');


  const [isExpand, setIsExpand] = useState(false);


  const containerRef = useRef();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div className="relative">
      <HeaderContent titlePage={titlePage} headerChart={headerChart} isAll={isAll} setIsAll={setIsAll} />

      {/* FOLDER LIST */}
      {showButton && !isExpand && (
        <img
          src={Expand}
          className="absolute right-7 top-20 w-8 rotate-180 rounded-md z-10 opacity-80 hover:opacity-100 bg-kb-primary-color "
          onClick={() => {
            setIsExpand(!isExpand);
          }}
        />
      )}

      <div
        ref={containerRef}
        className={`flex relative  gap-[1.125rem] px-[1.6875rem] w-full py-4 flex-wrap 
        ${showButton ? 'overflow-hidden' : ''} 
        ${isExpand ? "max-h-fit overflow-visible" : "max-h-[8rem]"
          }`}
      >

        {/* FOLDER */}
        {folder?.map((i) => {
          return (
            <div
              // onClick={() => { setTitleChart(pre => [...pre, i.name]) }}
              key={i.id}
              className={`relative flex min-w-[8.39063rem]  h-[6.09375rem] justify-center items-center p-[0.9375rem] rounded-md  ${CategOpt.isOpen && CategOpt.itemID === i.id ? 'bg-blue-200/50' : 'kb-shadow-white-bg'}`}
            >
              <Link to={`${linkpath}/${i.id}`} className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch">
                <div className="flex flex-col gap-2 justify-between items-start flex-[1_0_0]">
                  <img className="w-12 h-[2.10938rem]" src={Folder} />

                  <div className="flex flex-col items-start text-kb-second-color">
                    <div className="l3-b">{i.name}</div>
                    <div className="l3-r">48 files</div>
                  </div>
                </div>
              </Link>

              <div className="flex justify-center items-start gap-[0.46875rem] self-stretch  ">
                <img
                  className="cursor-pointer hover:outline-blue-200 hover:outline-double" src={Dot}
                  onClick={() => {
                    if (CategOpt.itemID !== i.id && CategOpt.isOpen) {
                      return setCategOpt({ itemID: i.id, isOpen: true })
                    }
                    setCategOpt({ itemID: i.id, isOpen: !CategOpt.isOpen })
                  }}
                />

                <div className={`  z-50  ease-linear duration-200
                ${showButton && !isExpand ? 'fixed -translate-x-2/3 -translate-y-2/3 ' : 'absolute bottom-2/3 right-1/4'} 
                  ${CategOpt.isOpen && CategOpt.itemID === i.id ? '' : 'translate-x-1/4 translate-y-1/3 scale-0'}`}
                >
                  <CategogyOwnerOpt setCategOpt={setCategOpt} info={i} />
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
          {/* <div className="self-stretch h-[46px] flex-col justify-start items-start flex">
                        <div className="self-stretch text-cyan-900 text-2xl font-bold leading-[30px]">Account List</div>
                        <div className="self-stretch text-neutral-400 text-base font-normal leading-none">Showing 7 results</div>
                    </div> */}

          <div className="flex flex-col self-stretch items-start content-start  w-auto gap-[1.125rem] ">
            {article?.map((i) => <Article key={i.id} articleID={articleID} setAticleID={setAticleID} data={i} itemID={i.id} />)}

          </div>
        </div>
      </div>



    </div>
  );
}

export default ContentPage;
