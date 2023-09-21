import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';




const useGetSearch = (userId, keyWord) => {

    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/content/search/${keyWord}/user/${userId}`,

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['searchData', keyWord],
        enabled: !!keyWord,
        keepPreviousData: true,

    });


    return {
        searchData: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetSearch;