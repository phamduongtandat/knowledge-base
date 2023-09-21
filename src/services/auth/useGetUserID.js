import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';



const useGetUserID = (preferred_username) => {

    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/user-details/username/${preferred_username}`,

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['userID'],
        //enabled: !!folderID,
        keepPreviousData: true,

    });


    return {
        userID: res.data?.data?.id,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetUserID;