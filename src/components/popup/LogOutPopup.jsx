import { useDispatch } from "react-redux"
import { getLogOut } from "../../redux/popupSlice"
import { useNavigate } from "react-router-dom"


function LogOutPopup() {
    const backLogin = useNavigate()
    const dispatch = useDispatch()
    return (
        <div
            id='addBackDrop'
            onClick={({ target }) => {

                if (target.id === 'addBackDrop') {
                    location.reload()
                    localStorage.setItem('isLogOut', JSON.stringify(false))
                    dispatch(getLogOut(false))
                }
            }}
            className="bg-kb-neutral-700/50 fixed z-50 inset-0"
        >



            <div className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[570px] h-[264px] p-6 bg-white rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch py-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-cyan-900 text-4xl font-bold leading-9">LOG OUT?</div>
                </div>
                <div className="self-stretch py-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-center text-cyan-900 text-base font-medium leading-normal">Are your sure to log out?</div>
                </div>
                <div className="self-stretch h-[72px] pt-5 flex-col justify-start items-start gap-2.5 flex">
                    <div className="self-stretch justify-start items-start gap-2.5 inline-flex">

                        <div
                            onClick={() => {
                                localStorage.setItem('isLogOut', JSON.stringify(false))
                                dispatch(getLogOut(false))
                                // backLogin('/login')
                                document.cookie = `access_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC`
                                document.cookie = `refresh_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC`
                                location.reload()



                            }}
                            className="cursor-pointer grow shrink basis-0 h-[52px] px-2.5 py-4 bg-red-500 hover:bg-red-600 rounded-lg justify-center items-center gap-2.5 flex">
                            <div className="text-white text-xl font-bold leading-tight">YES</div>
                        </div>

                        <div
                            onClick={() => {
                                location.reload()
                                localStorage.setItem('isLogOut', JSON.stringify(false))
                                dispatch(getLogOut(false))
                            }}
                            className="cursor-pointer grow shrink basis-0 h-[52px] px-2.5 py-4 bg-neutral-400 hover:bg-neutral-500/50 rounded-lg justify-center items-center gap-2.5 flex">
                            <div className="text-white text-xl font-bold leading-tight">NO</div>
                        </div>

                    </div>
                </div>
            </div>






        </div>
    )
}

export default LogOutPopup
