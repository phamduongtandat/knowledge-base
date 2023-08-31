
import useGetProperties from './../../services/option/useGetProperties';
import { properPopup } from '../../redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import formatDate from '../../utils/formatDate';

function ProperPopup() {

    const dispatch = useDispatch()
    // const { itemName } = useContext(AddPopupContext)
    const itemInfo = useSelector(state => state.popup.itemInfo)
    const { properties } = useGetProperties(itemInfo?.id)

    return (
        <div
            id='addBackDrop'
            onClick={({ target }) => {

                if (target.id === 'addBackDrop') {
                    dispatch(properPopup(false))
                }
            }}
            className="bg-kb-neutral-700/50 fixed z-50 inset-0"
        >


            {/* <div className="  flex-col items-start gap-1.5 p-4 rounded-[0.5rem] kb-shadow-white-bg">                

            </div> */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center  rounded-[0.5rem] gap-1.5 p-7 w-[20rem]  text-kb-neutral-500 kb-shadow-white-bg">

                <div className="flex justify-center items-center gap-2.5 self-stretch px-0 py-2.5">
                    <div className="l1-b text-kb-second-color">Properties</div>
                </div>

                <div className="flex items-start justify-between w-full ">
                    <div className="flex justify-center items-center gap-2.5  px-0 py-1">
                        <h4 className="flex-1">ID</h4>
                    </div>

                    <div className="flex justify-between items-center gap-2.5 px-0 py-1">
                        <div className="p1-b flex-1">{properties?.id}</div>
                    </div>
                </div>

                <div className="flex items-start justify-between w-full ">
                    <div className="flex justify-center items-center gap-2.5  px-0 py-1">
                        <h4 className="flex-1">Name</h4>
                    </div>

                    <div className="flex justify-between items-center gap-2.5 px-0 py-1">
                        <div className="p1-b flex-1">{properties?.name}</div>
                    </div>
                </div>



                <div className="flex items-start justify-between w-full ">
                    <div className="flex justify-center items-start gap-2.5  px-0 py-1">
                        <h4 className="flex-1">Author</h4>
                    </div>

                    <div className="flex justify-center items-center gap-2.5 px-0 py-1">
                        <div className="p1-b flex-1">{properties?.author}</div>
                    </div>
                </div>

                <div className="flex items-start justify-between w-full ">
                    <div className="flex justify-start items-start gap-2.5  px-0 py-1">
                        <h4 className="flex-1">Type</h4>
                    </div>

                    <div className="flex justify-center items-center gap-2.5 px-0 py-1">
                        <div className="p1-b flex-1">{properties?.type}</div>
                    </div>
                </div>

                <div className="flex items-start justify-between w-full ">
                    <div className="flex justify-start items-start gap-2.5  px-0 py-1">
                        <h4 className="flex-1">Status</h4>
                    </div>

                    <div className="flex justify-center items-center gap-2.5 px-0 py-1">
                        <div className="p1-b flex-1">{properties?.status}</div>
                    </div>
                </div>

                <div className="flex items-start justify-between w-full ">
                    <div className="flex justify-start items-start gap-2.5  px-0 py-1">
                        <h4 className="flex-1">Editor Type</h4>
                    </div>

                    <div className="flex justify-center items-center gap-2.5 px-0 py-1">
                        <div className="p1-b flex-1">{properties?.editor}</div>
                    </div>
                </div>

                <div className="flex items-start justify-between w-full ">
                    <div className="flex justify-center items-center gap-2.5  px-0 py-1">
                        <h4 className="flex-1">Created at</h4>
                    </div>

                    <div className="flex justify-center items-center gap-2.5 px-0 py-1">
                        <div className="p1-b flex-1">{formatDate(properties?.createAt)}</div>
                    </div>
                </div>

                <div className="flex items-start justify-between w-full ">
                    <div className="flex justify-center items-center gap-2.5  px-0 py-1">
                        <h4 className="flex-1">Last modified</h4>
                    </div>

                    <div className="flex justify-center items-center gap-2.5 px-0 py-1">
                        <div className="p1-b flex-1">{properties?.updateAt ? formatDate(properties?.updateAt) : 'Not update'}</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProperPopup
