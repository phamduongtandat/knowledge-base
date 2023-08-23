import jwtDecode from "jwt-decode";
const checkLogin = () => {

    const accessToken = document.cookie?.split('; ').find(row => row.startsWith('access_token'))?.split('=')[1];
    if (!accessToken) {
        return {
            isLogin: false,
            tokenInfo: null
        }
    }
    const { name, resource_access, exp } = jwtDecode(accessToken)
    let isAdmin = resource_access?.['knowledge-base']?.roles?.includes('ROLE_ADMIN')


    if (exp < new Date().getTime() / 1000) {
        return ({
            isLogin: false,
            tokenInfo: null
        })

    }

    return {
        isLogin: true,
        tokenInfo: { exp, name, isAdmin }
    }
}

export default checkLogin