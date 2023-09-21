import { useQuery } from '@tanstack/react-query';

import axios from '../../config/axios';



const useGetArticle = (userID, articleID) => {



    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/content/page/${articleID}/user/${userID}`,

        });

        return res.data;
    };



    const res = useQuery({
        queryFn,
        queryKey: ['articleContent', userID],
        enabled: !!articleID && !!userID,
        keepPreviousData: true,

    });


    return {
        articleContent: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };
};

export default useGetArticle;