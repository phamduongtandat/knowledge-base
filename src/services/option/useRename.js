import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../config/react-query';
import axios from '../../config/axios';



import { useDispatch } from 'react-redux';
import { renamePopup } from '../../redux/popupSlice';

const useRename = (contentID) => {

    const dispatch = useDispatch()

    const mutationFn = async (data) => {
        const res = await axios({
            method: 'put',
            url: `/api/content/rename/${contentID}`,
            data,
        });

        return res?.data;

    };

    const onSuccess = async () => {

        dispatch(renamePopup(false))
        queryClient.invalidateQueries(['folderContent']);
        queryClient.invalidateQueries(['homePageContent'])
        queryClient.invalidateQueries(['searchData'])
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
        renameContent: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useRename;