import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';







const useDeleteSharedAcc = (contentID) => {

    //const dispatch = useDispatch()


    const mutationFn = async (shareId) => {
        const res = await axios({
            method: 'delete',
            url: `/api/content/share/${contentID}/user/${shareId}`,

        });

        return res?.data;
    };

    const onSuccess = async () => {

        queryClient.invalidateQueries(['sharedUsers']);

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
        deleteSharedAcc: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useDeleteSharedAcc;