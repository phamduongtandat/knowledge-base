import { useMutation } from '@tanstack/react-query';

import axios from '../../config/axios';



const useDownloadFile = () => {

    //const {tokenInfo}=checkLogin()

    const mutationFn = async (fileID) => {
        const res = await axios({
            method: 'post',
            url: `/api/content/download-file/${fileID}`,

        });

        return res?.data;
    };

    const onSuccess = (data) => {

        const linkSource = `data:application/pdf;base64,${data?.data}`;
        const downloadLink = document.createElement("a");
        const fileName = JSON.parse(localStorage.getItem('fileName'))
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();

    };

    const onError = (error) => {
        const message = error.response?.data?.data;
        console.log(' message:', message)
    };

    const mutation = useMutation({
        mutationFn,
        onError,
        onSuccess
    });

    return {
        downloadFile: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        isLoading: mutation.isLoading,
        error: mutation.error?.response?.data?.data,
    };
};

export default useDownloadFile;