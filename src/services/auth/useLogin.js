import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import checkLogin from '../../utils/checkLogin';
const useLogin = () => {
    checkLogin
    const navigate = useNavigate();
    const mutationFn = async ({ username, password }) => {
        const client_id = import.meta.env.VITE_CLIENT_ID
        const client_secret = import.meta.env.VITE_CLIENT_SECRET
        const grant_type = import.meta.env.VITE_GRANT_TYPE

        const params = new URLSearchParams();
        params.append('client_id', client_id);
        params.append('client_secret', client_secret);
        params.append('grant_type', grant_type);
        params.append('username', username);
        params.append('password', password);

        const res = await axios.post(import.meta.env.VITE_KEYCLOAK_URL, params);

        return res?.data
    }
    const onSuccess = (data) => {
        document.cookie = `access_token=${data.access_token}`
        document.cookie = `refresh_token=${data.refresh_token}`
        const { isLogin } = checkLogin()
        if (isLogin) navigate('/')
    };

    const onError = async (error) => {
        console.log('error :', error?.response?.data)
    }
    const mutation = useMutation({ mutationFn, onError, onSuccess });

    return {
        logIn: mutation.mutate,
        isLoading: mutation.isLoading,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error?.response?.data,
    };

}

export default useLogin;