import { useState } from "react";
import PageTitleLayout from "../layout/PageTitleLayout";
import Plus from "../../assets/icon/plus.svg";
import Filter from "../../assets/icon/filter.svg";
import FileToggle from "../toggle/FileToggle";
import AddOption from "../optionDropdown/AddOption";
import FileFilterOpt from "../optionDropdown/FileFilterOpt";
import BlogFilterOpt from "../optionDropdown/BlogFilterOpt";
import AddNewPopup from "../popup/AddNewPopup";


function HeaderContent({ titlePage }) {
  const [isOpenItem, setIsOpenItem] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isFilterOpt, setIsFilterOpt] = useState(false)

  return (
    <div className="flex items-center gap-[0.46875rem]  px-[1.6875rem] h-[1.8125rem] justify-between">
      {isOpenItem ? (
        <div className="text-kb-second-color l1-b">{titlePage}</div>
      ) : (
        <PageTitleLayout />
      )}

      {/* POPUP ADD NEW */}
      {/* <AddNewPopup /> */}

      {/* ADD MORE */}
      {titlePage == 'Home' &&
        <div onClick={() => { setIsAdd(!isAdd) }} className="relative flex items-start">
          <button

            className=" flex justify-center items-center gap-[0.46875rem] px-[0.46875rem] py-3 rounded-md bg-kb-primary-gradient">
            <img
              className="flex w-[0.9375rem] h-[0.9375rem] justify-center items-center gap-[0.46875rem] px-[0.04688rem] py-[0.09375rem]"
              src={Plus}
              alt=""
            />
            <div className="l3-b kb-text-shadow-lg">Add more</div>
          </button>

          <div className={`absolute top-12 z-10 -right-11 ease-out duration-200  ${isAdd ? '' : '-translate-y-1/3 scale-0'}`}>
            <AddOption />
          </div>

        </div>
      }

      {/*TOGGLE & FILTER */}
      <div className="flex justify-end items-center gap-3 self-stretch">

        <FileToggle />

        <div

          className="relative flex justify-center rounded-full items-center gap-[0.46875rem] kb-shadow-white-bg p-[0.70313rem] cursor-pointer">
          <img onClick={() => { setIsFilterOpt(!isFilterOpt) }} src={Filter} />
          {isFilterOpt && <div className="absolute z-20 top-full mt-2 right-0">
            <FileFilterOpt />
            {/* <BlogFilterOpt /> */}

          </div>}
        </div>

      </div>
    </div>
  );
}

export default HeaderContent;
