
function AccCard() {
    return (
        <div className='flex flex-col p-3 kb-shadow-white-bg rounded-lg gap-3'>
            <div className='flex flex-row gap-4'>
                <div className='text-kb-second-color'>
                    <h3>Username</h3>
                    <div className='p1-r'>Developer</div>
                </div>
                <div className='bg-gray-400 flex justify-center items-center rounded-md w-[48px] h-[48px]'>48x48</div>
            </div>
            <div className='w-full bg-gray-200 h-[1px] rounded-full'></div>
            <div className='flex flex-row justify-between'>
                <div className='p3-r text-kb-neutral-300 text-left'>
                    <div>Last access</div>
                    <div>Created at</div>
                </div>
                <div className='p3-r text-kb-second-color text-right'>
                    <div>2s ago</div>
                    <div>dd/mm/yyyy</div>
                </div>
            </div>
            <div className='w-full bg-gray-200 h-[1px] rounded-full'></div>
            <div className='p3-b kb-text-shadow-sm flex justify-between gap-2'>
                <button className='bg-[#E24C4B] flex-1 flex justify-center gap-1 py-2 px-1 rounded-md items-center'>
                    <div className='Icon'>O</div>
                    <div>Deactive</div>
                </button>
                <button className='bg-kb-neutral-300 flex-1 py-2 px-1 rounded-md flex items-center'>Reset password</button>
            </div>
        </div>
    )
}

export default AccCard
