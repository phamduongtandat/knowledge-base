import Article from "../Article/Article";
import HeaderContent from "./HeaderContent";
import Folder from "../../assets/image/folder.png";
import Dot from "../../assets/image/dot.svg";
import Expand from "../../assets/icon/expand.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

function ContentPage({ titlePage, ab }) {
  const [isExpand, setIsExpand] = useState(false);

  const te = [12];
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

      {showButton && !isExpand && (
        <img
          src={Expand}
          className="absolute w-8 rotate-180 rounded-md z-10 opacity-80 hover:opacity-100 bg-kb-primary-color right-7 top-20"
          onClick={() => {
            setIsExpand(!isExpand);
          }}
        />
      )}

      <div
        ref={containerRef}
        className={`flex relative  gap-[1.125rem] px-[1.6875rem] w-full py-4 flex-wrap overflow-hidden ${isExpand ? "max-h-fit" : "max-h-[8rem]"
          }`}
      >
        {te.map((i) => {
          return (
            <div
              key={i}
              className="flex min-w-[8.39063rem]  h-[6.09375rem] justify-center items-center p-[0.9375rem] rounded-md kb-shadow-white-bg"
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

              <div className="flex justify-center items-start gap-[0.46875rem] self-stretch">
                <img className="cursor-pointer" src={Dot} />
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

      <div className="flex bottom-auto w-full items-start content-start gap-[1.5rem_1.125rem] flex-1 self-stretch px-[1.6875rem] ">
        <div className="flex flex-col items-start gap-[1.875rem] flex-[1_0_0] px-0 py-2 rounded-md">
          {/* <div className="self-stretch h-[46px] flex-col justify-start items-start flex">
                        <div className="self-stretch text-cyan-900 text-2xl font-bold leading-[30px]">Account List</div>
                        <div className="self-stretch text-neutral-400 text-base font-normal leading-none">Showing 7 results</div>
                    </div> */}

          <div className="flex flex-col self-stretch items-start content-start  w-auto gap-[1.125rem] hidden-scrollbar overflow-y-scroll ">
            <Article />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
