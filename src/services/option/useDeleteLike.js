import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';

import { movePopup } from '../../redux/popupSlice';





const useDeleteLike = (userID) => {

    //const dispatch = useDispatch()


    const mutationFn = async (contentID) => {
        const res = await axios({
            method: 'delete',
            url: `/api/favorites/${contentID}/user/${userID}`,

        });

        return res?.data;
    };

    const onSuccess = async () => {

        queryClient.invalidateQueries(['shareContent']);
        queryClient.invalidateQueries(['folderContent']);
        queryClient.invalidateQueries(['articleContent'])
        queryClient.invalidateQueries(['searchData'])
        queryClient.invalidateQueries(['favouriteContent'])
        queryClient.invalidateQueries(['recentContent']);
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
        deleteLike: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useDeleteLike;