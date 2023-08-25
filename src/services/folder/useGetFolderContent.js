import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';


const useGetFolderContent = (folderID) => {
    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/content/${folderID}`,

        });

        return res.data;
    };

    const res = useQuery({
        queryFn,
        queryKey: ['folderContent', folderID],
        enabled: !!folderID,
        keepPreviousData: true,

    });


    return {
        folderContent: res.data?.data,
        isLoading: res.isLoading,
        isSuccess: res.isSuccess,
        isError: res.isError,
    };

}


export default useGetFolderContent;