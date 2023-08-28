import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';
import { useDispatch } from 'react-redux';
import { movePopup } from '../../redux/popupSlice';
import { useNavigate } from 'react-router-dom';




const useMoveTo = (contentID) => {
    //const navi = useNavigate()
    const dispatch = useDispatch()


    const mutationFn = async (data) => {
        const res = await axios({
            method: 'put',
            url: `/api/content/move/${contentID}`,
            data,
        });

        return res?.data;
    };

    const onSuccess = async () => {

        dispatch(movePopup(false))
        //navi(`/home/content/`)
        queryClient.invalidateQueries(['folderContent']);
        queryClient.invalidateQueries(['homePageContent'])
        queryClient.invalidateQueries(['searchData'])
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
        moveTo: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.message,
    };
};

export default useMoveTo;