import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';

import { useDispatch, useSelector } from 'react-redux';
import { addContentPopup } from '../../redux/popupSlice';
//import { useNavigate } from 'react-router-dom';

const useUploadFile = (userID, contentID) => {

    //const {tokenInfo}=checkLogin()
    const dispatch = useDispatch()
    // const navi = useNavigate()
    // const pagePath = useSelector(state => state.edit.pagePath)
    // const isAddContent = useSelector(state => state.popup.isAddContent)

    const mutationFn = async (data) => {
        const res = await axios({
            method: 'post',
            url: `/api/content/upload-file/${userID}/folder/${contentID}`,
            data,
        });

        return res?.data;
    };

    const onSuccess = async (data) => {

        //console.log('data :', data)        
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
        uploadFile: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useUploadFile;