import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';
import checkLogin from '../../utils/checkLogin';



const useGetProperties = (contentID) => {
    const { tokenInfo } = checkLogin()
    console.log('userID :', tokenInfo.userID)
    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/content/property/${contentID}`,

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['properties', contentID],
        enabled: !!contentID,
        keepPreviousData: true,

    });


    return {
        properties: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetProperties;