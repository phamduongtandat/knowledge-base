import jwtDecode from "jwt-decode";


const checkLogin = (out) => {

    const accessToken = document.cookie?.split('; ').find(row => row.startsWith('access_token'))?.split('=')[1];
    if (!accessToken) {
        return {
            isLogin: false,
            tokenInfo: null
        }
    }
    const { name, resource_access, exp, preferred_username } = jwtDecode(accessToken)
    let isAdmin = resource_access?.['knowledge-base']?.roles?.includes('ROLE_ADMIN')


    if (exp < new Date().getTime() / 1000) {
        return ({
            isLogin: false,
            tokenInfo: null
        })

    }
    //console.log('isLogin :', isLogin)
    return {

        isLogin: out ?? true,
        accessToken,
        tokenInfo: { exp, name, isAdmin, preferred_username }
    }
}

export default checkLogin