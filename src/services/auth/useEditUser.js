import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';




const useEditUser = (userID) => {


    const mutationFn = async (data) => {
        const res = await axios({
            method: 'put',
            url: `/api/user-details/${userID}`,
            data
        });

        return res?.data;
    };

    const onSuccess = async () => {

        queryClient.invalidateQueries(['userDetail']);

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
        editUser: mutation.mutate,
        isSuccessE: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useEditUser;