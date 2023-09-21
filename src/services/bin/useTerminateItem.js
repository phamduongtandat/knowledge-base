import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';
import { useDispatch } from 'react-redux';
import { terminatePopup } from '../../redux/popupSlice';



const useTerminateItem = (contentID) => {
    const dispatch = useDispatch()


    const mutationFn = async () => {
        const res = await axios({
            method: 'delete',
            url: `/api/content/trash/${contentID}`,
        });

        return res?.data;
    };

    const onSuccess = async () => {

        queryClient.invalidateQueries(['binContent']);
        dispatch(terminatePopup(false))
    };

    const onError = (error) => {
        const message = error.response?.data?.message;
        console.log(' message:', message)
    };

    const mutation = useMutation({
        mutationFn,
        onError,
        onSuccess,
    });

    return {
        terminateItem: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.message,
    };
};

export default useTerminateItem;