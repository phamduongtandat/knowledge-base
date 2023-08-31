import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';




const useLike = () => {



    const mutationFn = async (data) => {
        const res = await axios({
            method: 'post',
            url: `/api/content/fav/create`,
            data
        });

        return res?.data;
    };

    const onSuccess = async () => {


        queryClient.invalidateQueries(['folderContent']);
        queryClient.invalidateQueries(['articleContent'])
        queryClient.invalidateQueries(['searchData'])
    };

    const onError = (error) => {
        const message = error.response?.data?.data;
        console.log(' message:', message)
    };

    const mutation = useMutation({
        mutationFn,
        onError,
        onSuccess,
    });

    return {
        likeArticle: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useLike;