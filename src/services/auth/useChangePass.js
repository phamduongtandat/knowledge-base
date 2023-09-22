import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';




const useChangePass = (userKey) => {


    const mutationFn = async (data) => {
        const res = await axios({
            method: 'put',
            url: `https://hiptechvn.com:8443/realms/hiptech-portal/users/${userKey}/reset-password`,
            data
        });

        return res?.data;
    };

    const onSuccess = async () => {

        //queryClient.invalidateQueries(['userDetail']);

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
        changePass: mutation.mutate,
        isSuccessC: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useChangePass;