import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';
import { useDispatch } from 'react-redux';
import { markdownEdit } from '../../redux/editSlice';



const useUpdateArt = (contentID) => {

    const dispatch = useDispatch()

    const mutationFn = async (data) => {
        const res = await axios({
            method: 'put',
            url: `/api/content/page/${contentID}`,
            data
        });

        return res?.data;
    };

    const onSuccess = async () => {

        dispatch(markdownEdit(false))
        queryClient.invalidateQueries(['folderContent']);

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
        updateArt: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useUpdateArt;