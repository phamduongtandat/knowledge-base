import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';




const useGetUserList = (query) => {


    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/user-details/search-name`,
            params: query

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['userList', query],
        enabled: !!query,
        keepPreviousData: true,

    });


    return {
        userList: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetUserList;