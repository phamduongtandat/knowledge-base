import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';
import checkLogin from '../../utils/checkLogin';



const useGetHomePage = (status) => {
    const { tokenInfo } = checkLogin()
    console.log('userID :', tokenInfo)
    console.log('status :', status)
    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/content/home-page/userId/${tokenInfo?.userID}/status/${status}`,

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['homePageContent', status],
        //enabled: !!status,
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