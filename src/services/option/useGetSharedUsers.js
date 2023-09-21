import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';




const useGetSharedUsers = (contentID) => {


    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/shares/list-user/${contentID}`,

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['sharedUsers', contentID],
        enabled: !!contentID,
        keepPreviousData: true,

    });


    return {
        sharedUsers: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetSharedUsers;