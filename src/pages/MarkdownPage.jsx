import { useNavigate, useParams } from "react-router-dom"
import checkLogin from "../utils/checkLogin"
import { useEffect, useState } from "react"
import MarkdownArea from "../components/MarkdownArea"
import { useDispatch, useSelector } from "react-redux"
import { selectEditorPopup } from "../redux/popupSlice"
import WriteToggle from "../components/toggle/WriteToggle"
import useCreateContent from "../services/home/useCreateContent"
import useUpdateArt from "../services/article/useUpdateArt"



function MarkdownPage() {
    const isMarkDownEdit = useSelector(state => state.edit.isMarkDownEdit)
    const itemEdit = useSelector(state => state.edit.itemEdit)


    useEffect(() => {
        if (isMarkDownEdit) {
            setArticle(itemEdit?.content)
            setArtName(itemEdit?.name)
        }

    }, [])


    const { parentID } = useParams()
    const [isWrite, setIsWrite] = useState(true)
    const [article, setArticle] = useState('')
    const [artName, setArtName] = useState('')
    const dispatch = useDispatch()

    const { isLogin } = checkLogin()
    const userID = useSelector(state => state.auth.userId)

    const navi = useNavigate()

    useEffect(() => {
        if (!isLogin) navi('/login')
        dispatch(selectEditorPopup(false))
    }, [isLogin])

    const { createContent, error, } = useCreateContent()
    console.log('error :', error)

    const handPost = () => {
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
            status: "PUBLISH",
            editor: "Markdown"
        }

        createContent(data)


    }

    const { updateArt } = useUpdateArt(itemEdit?.id)
    const handEdit = () => {
        if (!artName || !!error) {
            return

        }
        const data = {
            name: artName,
            content: article,
            file: []

        }

        updateArt(data)

    }

    return (
        <div className="flex items-start max-h-fit min-h-screen">
            {isLogin &&

                <div className=" flex flex-col w-[85.375rem] items-start px-[1.75313rem] py-[28.05px]">

                    <div className="flex h-[2.92188rem] justify-between items-center self-stretch  py-0">

                        <div
                            onClick={() => { navi('/') }}
                            className="flex items-start cursor-pointer">

                            <div className="kb-text-shadow-lg flex justify-center items-center gap-[0.487rem] self-stretch px-[0.487rem] py-[0.77919rem] rounded-[0.38956rem] bg-kb-primary-gradient">

                                <i className="flex w-[0.97394rem] h-[0.97394rem] flex-col justify-center items-center gap-[0.487rem] fa-solid fa-house fa-sm" />



                                <div className="l3-b ">Back to Homepage</div>
                            </div>

                        </div>
                        {!isMarkDownEdit && <div
                            onClick={handPost}
                            className="flex items-start cursor-pointer">

                            <div className="kb-text-shadow-lg flex justify-center items-center gap-[0.487rem] self-stretch px-[0.487rem] py-[0.77919rem] rounded-[0.38956rem] bg-kb-primary-gradient">

                                <i className="flex w-[0.97394rem] h-[0.97394rem] flex-col justify-center items-center gap-[0.487rem] fa-solid fa-paper-plane fa-sm" />

                                <div className="l3-b ">Post</div>
                            </div>

                        </div>}

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

                        <div className="flex  items-start gap-[0.487rem]  self-stretch">

                            <div className="flex items-center gap-[0.487rem] ">

                                <div className="flex justify-center items-center gap-[0.2435rem]">

                                    <div className="justify-center items-center gap-[3.90px] flex text-kb-second-color">

                                        {/* FILL NAME */}
                                        <input
                                            value={artName}
                                            onChange={({ target }) => { setArtName(target.value) }} className="border-2 border-kb-second-color h-10 rounded-md pl-2" placeholder="Your article name" />
                                        <i className="fa-solid fa-pen-to-square fa-2xl "></i>

                                        {!artName && <span className="text-red-700 italic">Please fill name for my Article</span>}
                                        {<span className="text-red-700 italic" >{error}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end items-center gap-[0.2435rem] flex-[1_0_0] self-stretch">

                                <div className="flex justify-center  items-center">

                                    <WriteToggle isWrite={isWrite} setIsWrite={setIsWrite} />

                                </div>
                            </div>

                        </div>

                        {/* HASH TAG */}

                        {isWrite && <div className="flex flex-col items-start gap-3 self-stretch">

                            <div className="flex items-center gap-[0.487rem] self-stretch">

                                <div className="flex justify-center items-center gap-[0.2435rem]">

                                    <h4 className=" text-kb-neutral-300">Your article tag #</h4>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5 self-stretch p-2 border rounded-lg ">

                                <div className="flex bg bg-kb-text-background h-9 items-center  gap-2.5 rounded px-2.5 py-0">
                                    <div className="l3-b kb-text-primary-gradient">Oracle</div>
                                    <i className="fa-solid fa-xmark fa-sm cursor-pointer text-kb-neutral-300/50 "></i>
                                </div>

                            </div>
                        </div>}

                        {/* MARKDOWN */}

                        <MarkdownArea isWrite={isWrite} article={article} setArticle={setArticle} />



                    </div>
                </div>
            }
        </div>



    )
}

export default MarkdownPage
