import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';
import { useDispatch, useSelector } from 'react-redux';
import { markdownEdit } from '../../redux/editSlice';
import { useNavigate } from 'react-router-dom';



const useUpdateArt = (contentID) => {

    const dispatch = useDispatch()
    const pagePath = useSelector(state => state.edit.pagePath)
    const navi = useNavigate()
    const mutationFn = async (data) => {
        const res = await axios({
            method: 'put',
            url: `/api/content/page/${contentID}`,
            data
        });

        return res?.data;
    };

    const onSuccess = async () => {

        // dispatch(markdownEdit(false))
        // navi(pagePath)
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
        isSuccessU: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useUpdateArt;