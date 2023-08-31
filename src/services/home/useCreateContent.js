import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';

import { useDispatch, useSelector } from 'react-redux';
import { addContentPopup } from '../../redux/popupSlice';
import { useNavigate } from 'react-router-dom';

const useCreateContent = () => {

    //const {tokenInfo}=checkLogin()
    const dispatch = useDispatch()
    const navi = useNavigate()
    const pagePath = useSelector(state => state.edit.pagePath)
    const isAddContent = useSelector(state => state.popup.isAddContent)
    const mutationFn = async (data) => {
        const res = await axios({
            method: 'post',
            url: '/api/content',
            data,
        });

        return res?.data;
    };

    const onSuccess = async (data) => {
        if (isAddContent === 0) {

            return navi(pagePath)
        }
        console.log('data :', data)
        queryClient.invalidateQueries(['homePageContent']);
        queryClient.invalidateQueries(['folderContent']);
        dispatch(addContentPopup(0))
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
        createContent: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useCreateContent;