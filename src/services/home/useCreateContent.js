import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';

import { useDispatch } from 'react-redux';
import { addContentPopup } from '../../redux/popupSlice';

const useCreateContent = () => {

    //const {tokenInfo}=checkLogin()
    const dispatch = useDispatch()

    const mutationFn = async (data) => {
        const res = await axios({
            method: 'post',
            url: '/api/content',
            data,
        });

        return res?.data;
    };

    const onSuccess = async (data) => {
        console.log('data :', data)
        queryClient.invalidateQueries(['homePageContent']);
        dispatch(addContentPopup(0))
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
        createContent: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.message,
    };
};

export default useCreateContent;