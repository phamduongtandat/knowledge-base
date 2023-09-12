import Axios from 'axios';
import checkLogin from './../utils/checkLogin';
import useGetRefresh from '../services/auth/useGetRefresh';


const axios = Axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    // headers: {

    //     Authorization: 'Bearer' + ' ' + document.cookie?.split('; ').find(row => row.startsWith('access_token'))?.split('=')[1],
    // }
});

axios.interceptors.request.use(async function (config) {


    const { tokenInfo, accessToken, refreshToken } = checkLogin()
    config.headers['Authorization'] = 'Bearer' + ' ' + accessToken

    if (tokenInfo?.exp < new Date().getTime() / 1000) {
        const data = await useGetRefresh(refreshToken)
        document.cookie = `access_token=${data?.data?.access_token}`
        document.cookie = `refresh_token=${data?.data?.refresh_token}`
        config.headers['Authorization'] = 'Bearer' + ' ' + data?.data?.access_token
    }

    // const dataRfs = await useGetRefresh(refreshToken)
    // console.log('dataRfs :', dataRfs)


    return config;
}, function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
})

export default axios;