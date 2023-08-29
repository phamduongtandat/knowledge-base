import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';



const useGetFavourite = (userID) => {

    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/favorites/userId/${userID}`,

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['favouriteContent'],
        //enabled: !!folderID,
        keepPreviousData: true,

    });


    return {
        favouriteContent: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetFavourite;