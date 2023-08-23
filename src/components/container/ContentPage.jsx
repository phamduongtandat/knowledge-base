import Article from "../article/Article";
import HeaderContent from "./HeaderContent";
import Folder from "../../assets/image/folder.png";
import Dot from "../../assets/image/dot.svg";
import Expand from "../../assets/icon/expand.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import CategogyOwnerOpt from "../optionDropdown/CategogyOwnerOpt";

function ContentPage({ titlePage, ab }) {
  const [CategOpt, setCategOpt] = useState({ isOpen: false, itemID: '' })
  const [articleID, setAticleID] = useState('');

  const mock = ['ar1', 'ar2', 'ar3', 'ar4']
  const [isExpand, setIsExpand] = useState(false);

  const te = [12, 1, 2, 3, 4, 5, 6, 7, 8, 94, 15, 16, 11, 18, 19, 66, 99];
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
      <HeaderContent titlePage={titlePage} />

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
        {te.map((i) => {
          return (
            <div
              key={i}
              className={`relative flex min-w-[8.39063rem]  h-[6.09375rem] justify-center items-center p-[0.9375rem] rounded-md  ${CategOpt.isOpen && CategOpt.itemID === i ? 'bg-blue-200/50' : 'kb-shadow-white-bg'}`}
            >
              <Link to={`/recent/${ab}`} className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch">
                <div className="flex flex-col gap-2 justify-between items-start flex-[1_0_0]">
                  <img className="w-12 h-[2.10938rem]" src={Folder} />

                  <div className="flex flex-col items-start text-kb-second-color">
                    <div className="l3-b">EBS</div>
                    <div className="l3-r">48 files</div>
                  </div>
                </div>
              </Link>

              <div className="flex justify-center items-start gap-[0.46875rem] self-stretch  ">
                <img
                  className="cursor-pointer hover:outline-blue-200 hover:outline-double" src={Dot}
                  onClick={() => {
                    if (CategOpt.itemID !== i && CategOpt.isOpen) {
                      return setCategOpt({ itemID: i, isOpen: true })
                    }
                    setCategOpt({ itemID: i, isOpen: !CategOpt.isOpen })
                  }}
                />

                <div className={`  z-50  ease-linear duration-200
                ${showButton && !isExpand ? 'fixed -translate-x-2/3 -translate-y-2/3 ' : 'absolute bottom-2/3 right-1/4'} 
                  ${CategOpt.isOpen && CategOpt.itemID === i ? '' : 'translate-x-1/4 translate-y-1/3 scale-0'}`}
                >
                  <CategogyOwnerOpt />
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
            {mock.map((i) => <Article articleID={articleID} setAticleID={setAticleID} key={i} itemID={i} />)}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
