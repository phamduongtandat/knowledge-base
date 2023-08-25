import Axios from 'axios';
import checkLogin from './../utils/checkLogin';
const axios = Axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    headers: {
        Authorization: 'Bearer' + ' ' + document.cookie?.split('; ').find(row => row.startsWith('access_token'))?.split('=')[1],
    }
});

axios.interceptors.request.use(async function (config) {
    const { tokenInfo } = checkLogin()
    if (tokenInfo?.exp < new Date().getTime() / 1000) {
        //const data = await 
        //document.cookie = `access_token=${}`
        //config.headers['Authorization']='Bearer'+
    }
    return config;
}, function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
})

export default axios;