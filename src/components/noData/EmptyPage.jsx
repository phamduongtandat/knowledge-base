import Empty from "../../assets/image/empty.png";
import Add from "../../assets/icon/add.svg";

function EmptyPage({ titlePage }) {
    return (
        <>
            <div className="text-kb-second-color l1-b ml-7">{titlePage}</div>
            <div className="flex justify-center items-center gap-[1.125rem] flex-[1_0_0] self-stretch px-[1.6875rem] py-[1.125rem]">
                <div className="flex flex-col justify-center items-center gap-9">
                    <img className="w-[16.04775rem] h-[15.09375rem]" src={Empty} />

                    <div className="flex w-[16.04775rem] bg-kb-primary-gradient justify-center items-center gap-[0.46875rem] px-[0.46875rem] py-3 rounded-md">

                        <img src={Add} className="w-[15px] h-[15px] shadow flex-col justify-center items-center gap-[7.50px] inline-flex" />

                        <div className="text-white text-xl font-bold leading-tight">
                            New Category
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default EmptyPage;
