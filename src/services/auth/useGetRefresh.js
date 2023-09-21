import axios from "axios";


async function useGetRefresh(oldToken) {

    const client_id = import.meta.env.VITE_CLIENT_ID
    const client_secret = import.meta.env.VITE_CLIENT_SECRET
    const grant_type_rfs = import.meta.env.VITE_GRANT_TYPE_RFS

    const params = new URLSearchParams();
    params.append('client_id', client_id);
    params.append('client_secret', client_secret);
    params.append('grant_type', grant_type_rfs);
    params.append('refresh_token', oldToken);


    const res = await axios.post(import.meta.env.VITE_KEYCLOAK_URL, params);
    return res
}

export default useGetRefresh
