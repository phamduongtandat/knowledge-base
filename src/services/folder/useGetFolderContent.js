import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';
//import axios from 'axios';


const useGetFolderContent = (folderID) => {
    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: `/api/content/${folderID}`,

        });

        return res.data;
    };

    // const queryFn = async () => {
    //     const res = await axios.get(`http://103.116.106.153:8081/api/content/${folderID}`, {
    //         headers: {
    //             Authorization: 'Bearer' + ' ' + document.cookie?.split('; ').find(row => row.startsWith('access_token'))?.split('=')[1],
    //         }
    //     })
    //     return res.data;
    // }

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