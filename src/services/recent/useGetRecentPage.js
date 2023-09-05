import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';



const useGetRecentPage = (userID) => {

    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/recents/user/${userID}`,

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['recentContent', userID],
        enabled: !!userID,
        keepPreviousData: true,

    });


    return {
        recentContent: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetRecentPage;