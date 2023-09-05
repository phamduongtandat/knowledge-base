import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';




const useInviteAcc = (contentID) => {



    const mutationFn = async (data) => {
        const res = await axios({
            method: 'post',
            url: `/api/content/share/${contentID}`,
            data,
        });

        return res?.data;
    };

    const onSuccess = async () => {

        queryClient.invalidateQueries(['sharedUsers']);

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
        inviteAcc: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useInviteAcc;