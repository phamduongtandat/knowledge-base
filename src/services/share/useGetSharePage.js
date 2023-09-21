import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';



const useGetSharePage = (userID) => {

    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/shares/userId/${userID}`,

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['shareContent', userID],
        //enabled: !!folderID,
        keepPreviousData: true,

    });


    return {
        shareContent: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetSharePage;