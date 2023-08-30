
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import PageTitleLayout from '../layout/PageTitleLayout'
import remarkGfm from 'remark-gfm'

function BlogPage({ titlePage, data }) {


    const headerChart = [data?.parentName, data?.name]

    return (
        <div className="flex flex-col items-start flex-[1_0_0] self-stretch">
            <div className="flex justify-between items-center self-stretch px-[1.6875rem] py-0">

                <PageTitleLayout titlePage={titlePage} headerChart={headerChart} />
            </div>

            <div className="flex flex-col items-start gap-9 flex-[1_0_0] self-stretch px-[1.6875rem] py-[1.125rem]">

                <div className="flex flex-col justify-center items-center gap-6 self-stretch px-[1.875rem] py-6 rounded-[0.5625rem] kb-shadow-white-bg">



                    <div className="flex flex-col items-start gap-3 self-stretch">
                        <div className="flex flex-col items-start gap-[1.875rem] self-stretch">

                            <div className="flex justify-between items-center self-stretch">

                                <div className="w-[3.79688rem] h-[0.9375rem] flex justify-center items-center text-kb-neutral-300">
                                    <i className="fa-solid fa-paperclip fa-sm flex w-[0.9375rem] h-[0.9375rem] justify-center items-center gap-[0.46875rem] shrink-0"></i>
                                    <div className="l4-b ">2 files</div>
                                </div>

                                <div className="flex items-start gap-[0.23438rem] text-kb-neutral-300">
                                    <i className="fa-solid fa-heart fa-sm flex w-[0.9375rem] h-[0.9375rem] flex-col justify-center items-center gap-[0.46875rem]"></i>
                                    <div className="l3-b">Add to Favorite</div>
                                </div>

                            </div>

                            <div className="flex justify-between items-start self-stretch">
                                <div className="l2-b kb-text-primary-gradient">{data?.parentName}</div>

                                <div className="flex justify-end items-center gap-[0.46875rem] flex-[1_0_0] self-stretch">

                                    <img className="w-6 h-6 rounded-3xl border border-kb-primary-color" src="https://via.placeholder.com/24x24" />

                                    <div className="flex flex-col justify-center items-center self-stretch">
                                        <div className="text-kb-second-color p2-b">Author of the blog</div>

                                        <div className="text-kb-neutral-300 p2-b">June 22, 2023 | at 19:00</div>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-[0.5625rem] self-stretch">

                                <h2 className="text-kb-second-color">{data?.name}</h2>

                            </div>

                            <ReactMarkdown children={data?.content} remarkPlugins={[remarkGfm]} />

                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default BlogPage
