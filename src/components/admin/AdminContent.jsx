
import useGetUserList from '../../services/userAccount/useGetUserList';
import AccCard from './../card/AccCard';

function AdminContent() {
    const { userList } = useGetUserList({ name: '' })
    console.log(' userList:', userList)
    return (
        <div className="flex items-start gap-[1.125rem] flex-[1_0_0] self-stretch px-[1.6875rem] py-[1.125rem]">
            <div className="flex flex-col items-start gap-[1.125rem] flex-[1_0_0]">

                <div className="self-stretch h-[46px] flex-col justify-start items-start flex">
                    <div className="self-stretch text-cyan-900 text-2xl font-bold leading-[30px]">Account List</div>
                    <div className="self-stretch text-neutral-400 text-base font-normal leading-none">Showing {userList?.length} results</div>
                </div>

                <div className="flex flex-wrap justify-start items-start gap-[18px] w-full">

                    {userList?.map(i => <AccCard key={i?.id} data={i} />)}

                </div>

            </div>
        </div>
    )
}

export default AdminContent
