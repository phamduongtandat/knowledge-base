import UserAva from '../../assets/image/userava.png'
function AccCard({ data }) {
    return (
        <div className='flex flex-col items-stretch gap-3 p-3 rounded-md kb-shadow-white-bg min-w-[8.39063rem] '>
            <div className='flex justify-between items-center self-stretch gap-2 '>
                <div className='text-kb-second-color flex flex-col items-start'>
                    <h3>{data?.name}</h3>
                    <div className='p1-r'>Developer</div>
                </div>
                <img src={UserAva} className='w-12 h-12 border rounded-md' />
            </div>

            <div className='w-full bg-gray-200 h-[1px] rounded-full'></div>

            <div className='flex flex-col items-start gap-[0.1875rem] self-stretch'>
                <div className='p3-r text-kb-neutral-300 flex justify-between items-start self-stretch'>
                    <div>Last access</div>
                    <div>Created at</div>
                </div>
                <div className='p3-r text-kb-second-color flex justify-between items-start self-stretch'>
                    <div>2s ago</div>
                    <div>dd/mm/yyyy</div>
                </div>
            </div>

            <div className='w-full bg-gray-200 h-[1px] rounded-full'></div>

            <div className='p3-b kb-text-shadow-sm flex items-center justify-between gap-[0.5625rem]'>

                <button className='bg-red-700 flex justify-center items-center gap-[0.46875rem] px-7 py-1.5 rounded-md'>
                    <i className="fa-solid fa-power-off fa-sm"></i>
                    <div className='p3-b kb-text-shadow-sm'>Deactive</div>
                </button>

                <button className='bg-kb-neutral-300 flex justify-center items-center gap-[0.46875rem] self-stretch px-7 py-1.5 rounded-md'>Reset password</button>

            </div>

        </div>
    )
}

export default AccCard
