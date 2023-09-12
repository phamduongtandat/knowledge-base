import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';

const useGetHomePage = (userID, status) => {

    //console.log('status :', status)
    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/content/home-page/userId/${userID}/status/${status}`,

        });

        return res.data;
    };

    const res = useQuery({
        queryFn,
        queryKey: ['homePageContent', status, userID],
        enabled: !!userID && !!status,
        keepPreviousData: true,

    });

    return {
        homePageContent: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetHomePage;