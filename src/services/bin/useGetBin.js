import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';



const useGetBin = (userID) => {

    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/content/trash/${userID}`,

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['binContent', userID],
        enabled: !!userID,
        keepPreviousData: true,

    });


    return {
        binContent: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetBin;