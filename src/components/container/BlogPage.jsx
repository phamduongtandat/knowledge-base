
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import PageTitleLayout from '../layout/PageTitleLayout'
import remarkGfm from 'remark-gfm'
import useLike from '../../services/option/useLike'
import checkLogin from '../../utils/checkLogin'
import useGetUserID from './../../services/auth/useGetUserID';
import useDeleteLike from '../../services/option/useDeleteLike'
import formatDate from '../../utils/formatDate'
import UserAva from '../../assets/image/userava.png'
import { useNavigate } from 'react-router-dom'

function BlogPage({ titlePage, data }) {
    const navi = useNavigate()
    const headerChart = [
        { name: data?.parentName, id: data?.parentId },
        { name: data?.name, id: data?.id }
    ]

    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { deleteLike } = useDeleteLike(userID)
    const { likeArticle } = useLike()

    return (
        <div className="flex flex-col items-start flex-[1_0_0] self-stretch md:min-h-[476px] 2xl:min-h-[787px] max-h-full">
            <div className="flex justify-between items-center self-stretch px-[1.6875rem] py-0">

                <PageTitleLayout titlePage={titlePage} headerChart={headerChart} />
            </div>

            <div className="flex flex-col items-start gap-9 flex-[1_0_0] self-stretch px-[1.6875rem] py-[1.125rem]">

                <div className="flex flex-col justify-center items-center gap-6 self-stretch px-[1.5rem] py-6 rounded-[0.5625rem] kb-shadow-white-bg  md:max-w-full 2xl:max-w-full w-full">
                    {/* <div className="flex flex-col justify-center items-center gap-6 self-stretch px-[1.5rem] py-6 rounded-[0.5625rem] kb-shadow-white-bg  md:max-w-[1112px] 2xl:max-w-full w-full"> */}



                    <div className="flex flex-col items-start gap-3 self-stretch">
                        <div className="flex flex-col items-start gap-[1.875rem] self-stretch overflow-hidden ">

                            <div className="flex justify-between items-center self-stretch">

                                <div className="w-[3.79688rem] h-[0.9375rem] flex justify-center items-center text-kb-neutral-300">
                                    <i className="fa-solid fa-paperclip fa-sm flex w-[0.9375rem] h-[0.9375rem] justify-center items-center gap-[0.46875rem] shrink-0"></i>
                                    <div className="l4-b ">0 files</div>
                                </div>

                                {data?.isLike && <div
                                    onClick={() => {
                                        deleteLike(data?.id)
                                    }}
                                    className="cursor-pointer flex items-start gap-[0.23438rem] text-red-600">
                                    <i className="fa-solid fa-heart fa-sm flex w-[0.9375rem] h-[0.9375rem] flex-col justify-center items-center gap-[0.46875rem]"></i>
                                    <div className="l3-b">Liked</div>
                                </div>}

                                {!data?.isLike && <div
                                    onClick={() => {
                                        const dataLike = {
                                            articleId: data?.id,
                                            userId: userID
                                        }

                                        likeArticle(dataLike)
                                    }}
                                    className="cursor-pointer flex items-start gap-[0.23438rem] text-kb-neutral-300">
                                    <i className="fa-solid fa-heart fa-sm flex w-[0.9375rem] h-[0.9375rem] flex-col justify-center items-center gap-[0.46875rem]"></i>
                                    <div className="l3-b">Add to Favorite</div>
                                </div>}

                            </div>

                            <div className="flex justify-between items-start self-stretch">
                                <div className='flex gap-2'>

                                    {data?.hashTag?.replace(/\s+/g, " ")
                                        .split(' ').map((i, ind) => <h3
                                            key={ind} className=" kb-text-primary-gradient cursor-pointer"
                                            onClick={() => {
                                                //console.log(' tttt:', i?.replace(/#/g, ""))
                                                navi(`/search/${i?.replace(/#/g, "")}`)
                                            }}
                                        >
                                            {i}
                                        </h3>)}
                                </div>

                                <div className="flex justify-end items-center gap-[0.46875rem] flex-[1_0_0] self-stretch">

                                    <img className="w-6 h-6 rounded-3xl border border-kb-primary-color" src={UserAva} />

                                    <div className="flex flex-col justify-center items-end self-stretch">
                                        <div className="text-kb-second-color p2-b">{data?.author}</div>

                                        <div className="text-kb-neutral-300 p2-b">{formatDate(data?.createAt)}</div>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-[0.5625rem] self-stretch">

                                <h2 className="text-kb-second-color">{data?.name}</h2>

                            </div>


                            <div className=" w-fit min-h-full max-h-fit p-2 break-words">
                                {data?.editor === 'markdown' && <ReactMarkdown children={data?.content} remarkPlugins={[remarkGfm]} />}
                                {data?.editor === "wysiwyg" && <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>}
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default BlogPage
