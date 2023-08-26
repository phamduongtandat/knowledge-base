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
    const userID = "f1756388-80c6-4479-ad45-4ea69c1041a0"

    if (exp < new Date().getTime() / 1000) {
        return ({
            isLogin: false,
            tokenInfo: null
        })

    }

    return {

        isLogin: true,
        accessToken,
        tokenInfo: { exp, name, userID, isAdmin }
    }
}

export default checkLogin