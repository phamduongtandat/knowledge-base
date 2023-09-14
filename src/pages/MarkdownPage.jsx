import { useLocation, useNavigate, useParams } from "react-router-dom"
import checkLogin from "../utils/checkLogin"
import { useEffect, useState } from "react"
import MarkdownArea from "../components/MarkdownArea"
import { useDispatch } from "react-redux"
import { selectEditorPopup } from "../redux/popupSlice"
import WriteToggle from "../components/toggle/WriteToggle"
import useCreateContent from "../services/home/useCreateContent"
import useUpdateArt from "../services/article/useUpdateArt"
import WysiwygArea from "../components/editor/WysiwygArea"
import useGetUserID from "../services/auth/useGetUserID"
import useGetArticle from "../services/article/useGetArticle"



function MarkdownPage() {
    const { isLogin } = checkLogin()
    const { tokenInfo } = checkLogin()
    const { userID } = useGetUserID(tokenInfo?.preferred_username)

    const { parentID, editorType, id } = useParams()
    const { articleContent } = useGetArticle(userID, id)
    console.log('parentID :', parentID)
    // const pagePath = useSelector(state => state.edit.pagePath)
    // console.log('pagePath :', pagePath)

    const { pathname } = useLocation()
    const isMarkDownEdit = pathname?.split('/')[2] === 'edit'
    const [article, setArticle] = useState('')
    const [artName, setArtName] = useState('')
    const [hashTag, setHashTag] = useState('')
    useEffect(() => {
        if (isMarkDownEdit) {
            setArticle(articleContent?.content)
            setArtName(articleContent?.name)
            setHashTag(articleContent?.hashTag)
        }

    }, [isMarkDownEdit, articleContent])



    const [isWrite, setIsWrite] = useState(true)


    const dispatch = useDispatch()




    const navi = useNavigate()

    useEffect(() => {
        if (!isLogin) navi('/login')
        dispatch(selectEditorPopup(false))
    }, [isLogin])

    const { createContent, error, isSuccess, } = useCreateContent()
    console.log('error :', error)



    const handPost = (status) => {
        if (!artName) {
            //console.log(' errorteee:', error)
            return

        }
        const data = {
            name: artName,
            type: "article",
            content: article,
            parentId: parentID,
            userId: userID,
            status,
            hashTag,
            editor: editorType
        }

        createContent(data)


    }

    const { updateArt, isSuccessU } = useUpdateArt(id)

    useEffect(() => {
        if (isSuccess || isSuccessU) {
            if (parentID === 'recent' || parentID === 'favourite') {
                return navi(`/${parentID}`)
            }
            return navi(`/home/content/${parentID}`)
        }
    }, [isSuccess, isSuccessU])

    const handEdit = () => {
        if (!artName || !!error) {
            return

        }
        const data = {
            name: artName,
            content: article,
            hashTag,
            file: []

        }

        updateArt(data)

    }

    console.log('hashTag :', hashTag)
    return (
        <div className="flex items-start max-h-fit min-h-screen">
            {isLogin &&

                <div className=" flex flex-col  items-start md:px-[1.75313rem] md:py-[28.05px] md:w-[85.375rem]  2xl:px-[2.5rem] 2xl:py-[39.44px] 2xl:w-[120.25rem]">

                    <div className="flex h-[2.92188rem] justify-between items-center self-stretch  py-0">

                        <div
                            //onClick={() => { dispatch(markdownEdit(false)); return navi(pagePath) }}
                            onClick={() => {
                                if (parentID === 'recent' || parentID === 'favourite') {
                                    return navi(`/${parentID}`)
                                }
                                return navi(`/home/content/${parentID}`)
                            }}

                            className="flex items-start cursor-pointer">

                            <div className="kb-text-shadow-lg flex justify-center items-center gap-[0.487rem] self-stretch px-[0.487rem] py-[0.77919rem] rounded-[0.38956rem] bg-kb-primary-gradient">

                                <i className="flex w-[0.97394rem] h-[0.97394rem] flex-col justify-center items-center gap-[0.487rem] fa-solid fa-house fa-sm" />

                                <div className="l3-b ">Back to Homepage</div>
                            </div>

                        </div>
                        {!isMarkDownEdit &&

                            <div className="flex gap-2">
                                <div
                                    onClick={() => { handPost("PUBLISH") }}
                                    className="flex items-start cursor-pointer">

                                    <div className="kb-text-shadow-lg flex justify-center items-center gap-[0.487rem] self-stretch px-[0.487rem] py-[0.77919rem] rounded-[0.38956rem] bg-kb-primary-gradient">

                                        <i className="flex w-[0.97394rem] h-[0.97394rem] flex-col justify-center items-center gap-[0.487rem] fa-solid fa-paper-plane fa-sm" />

                                        <div className="l3-b ">Post</div>
                                    </div>

                                </div>

                                <div
                                    onClick={() => { handPost("DRAFT") }}
                                    className="flex items-start cursor-pointer">

                                    <div className="kb-text-shadow-lg flex justify-center items-center gap-[0.487rem] self-stretch px-[0.487rem] py-[0.77919rem] rounded-[0.38956rem] bg-kb-primary-gradient">

                                        <i className="flex w-[0.97394rem] h-[0.97394rem] flex-col justify-center items-center gap-[0.487rem] fa-solid fa-paper-plane fa-sm" />

                                        <div className="l3-b ">Private</div>
                                    </div>

                                </div>


                            </div>

                        }





                        {isMarkDownEdit && <div
                            onClick={handEdit}
                            className="flex items-start cursor-pointer">

                            <div className="kb-text-shadow-lg flex justify-center items-center gap-[0.487rem] self-stretch px-[0.487rem] py-[0.77919rem] rounded-[0.38956rem] bg-kb-primary-gradient">

                                <i className="flex w-[0.97394rem] h-[0.97394rem] flex-col justify-center items-center gap-[0.487rem] fa-solid fa-paper-plane fa-sm" />

                                <div className="l3-b ">Done Edit</div>
                            </div>

                        </div>}

                    </div>


                    <div className="flex flex-col   w-full min-h-screen items-start justify-start gap-[1.55831rem] mt-5 self-stretch px-[1.94794rem] py-[1.55831rem] rounded-[0.58438rem] bg-kb-neutral-white">

                        <div className="flex justify-between  items-center gap-[0.487rem] self-stretch">

                            <div className="flex items-center justify-between gap-[0.487rem] flex-1 ">

                                <div className="flex justify-start items-center gap-[0.2435rem] flex-1 ">

                                    {isWrite && <div className="justify-start items-center gap-[3.90px] flex text-kb-second-color flex-1 w-full">

                                        {/* FILL NAME */}
                                        <input
                                            value={artName || ''}
                                            onChange={({ target }) => { setArtName(target.value) }} className="border-2 border-kb-second-color h-10 rounded-md pl-2 w-2/3 " placeholder="Your article name" />
                                        <i className="fa-solid fa-pen-to-square fa-2xl "></i>

                                        {!artName && <span className="text-red-700 italic w-[277px]">Please fill name for my Article</span>}
                                        {<span className="text-red-700 italic" >{error}</span>}
                                    </div>}

                                    {!isWrite && <div className="flex flex-col items-start gap-[0.5625rem] self-stretch">

                                        <h2 className="text-kb-second-color">{artName}</h2>

                                    </div>}

                                </div>
                            </div>

                            <div className="flex justify-end items-center gap-[0.2435rem] self-stretch">

                                <div className="flex justify-center  items-center">

                                    <WriteToggle isWrite={isWrite} setIsWrite={setIsWrite} />

                                </div>
                            </div>

                        </div>

                        {/* HASH TAG */}

                        <div className="flex flex-col items-start gap-3 self-stretch">

                            <div className="flex items-center gap-[0.487rem] self-stretch">

                                <div className="flex justify-center items-center gap-[0.2435rem]">

                                    <h4 className=" text-kb-neutral-300">Your article tag #</h4>
                                </div>
                            </div>

                            {isWrite && <input
                                onChange={(e) => {
                                    setHashTag(e.target.value)
                                }}
                                value={hashTag}
                                maxLength={170}
                                className="flex items-start gap-2.5 self-stretch p-2 border rounded-lg outline-none text-kb-primary-color font-bold ">

                                {/* <div className="flex bg bg-kb-text-background h-9 items-center  gap-2.5 rounded px-2.5 py-0">
                                    <div className="l3-b kb-text-primary-gradient">Oracle</div>
                                    <i className="fa-solid fa-xmark fa-sm cursor-pointer text-kb-neutral-300/50 "></i>
                                </div> */}

                            </input>}
                        </div>

                        {!isWrite && <div className='flex gap-2'>

                            {hashTag?.replace(/\s+/g, " ")
                                .split(' ').map((i, ind) => <h3
                                    key={ind} className=" kb-text-primary-gradient cursor-pointer"

                                >
                                    {i}
                                </h3>)}
                        </div>}

                        {/* MARKDOWN */}

                        {editorType === 'markdown' && <MarkdownArea isWrite={isWrite} article={article} setArticle={setArticle} />}
                        {editorType === 'wysiwyg' && <WysiwygArea isWrite={isWrite} article={article} setArticle={setArticle} />}



                    </div>
                </div>
            }
        </div>



    )
}

export default MarkdownPage
