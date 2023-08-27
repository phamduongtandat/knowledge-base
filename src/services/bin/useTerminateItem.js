import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';



const useTerminateItem = () => {



    const mutationFn = async (contentID) => {
        const res = await axios({
            method: 'delete',
            url: `/api/content/trash/${contentID}`,
        });

        return res?.data;
    };

    const onSuccess = async () => {

        queryClient.invalidateQueries(['binContent']);

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