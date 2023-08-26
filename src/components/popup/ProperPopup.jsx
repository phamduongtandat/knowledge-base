
import useGetProperties from './../../services/option/useGetProperties';
import { properPopup } from '../../redux/popupSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProperPopup() {

    const dispatch = useDispatch()
    // const { itemName } = useContext(AddPopupContext)
    const itemInfo = useSelector(state => state.popup.itemInfo)
    const { properties } = useGetProperties(itemInfo?.id)
    console.log('properties :', properties)
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


            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-start gap-1.5 p-4 rounded-[0.5rem] kb-shadow-white-bg">
                <div className="flex justify-center items-center gap-1.5 rounded-[0.4rem] ">
                    <div className="l3-b ">{itemInfo.name}</div>
                </div>


                {/* <div className="flex flex-col justify-center items-center gap-2.5 self-stretch pt-[2.625rem] pb-5 px-0">
                    <img className="w-[3.85rem] h-[2.71rem]" src={Folder} />
                </div> */}



                {/* <div className={`flex flex-col items-start gap-1.5 self-stretch pt-3.5 pb-0 px-14  `}>
                    <button
                        type='button'
                        className={` flex justify-center items-center gap-1.5 self-stretch px-1.5 py-3 rounded-lg bg-kb-primary-gradient`}>
                        <div className="l3-b kb-text-shadow-lg">Acknowledge</div>
                    </button>
                </div> */}

            </div>
        </div>
    )
}

export default ProperPopup
