import jwtDecode from "jwt-decode";


const checkLogin = () => {

    // const accessToken = document.cookie?.split('; ').find(row => row.startsWith('access_token'))?.split('=')[1];
    // const refreshToken = document.cookie?.split('; ').find(row => row.startsWith('refresh_token'))?.split('=')[1];

    const accessToken = JSON.parse(localStorage.getItem('access_token')) || ''
    const refreshToken = JSON.parse(localStorage.getItem('refresh_token')) || ''

    if (!accessToken || !refreshToken) {
        return {
            isLogin: false,
            tokenInfo: null
        }
    }
    const { name, resource_access, exp, preferred_username } = jwtDecode(accessToken)
    let isAdmin = resource_access?.['knowledge-base']?.roles?.includes('ROLE_ADMIN')
    const rfs = jwtDecode(refreshToken)

    if (rfs?.exp < new Date().getTime() / 1000) {
        return ({
            isLogin: false,
            tokenInfo: null
        })

    }

    return {

        isLogin: true,
        accessToken,
        refreshToken,
        tokenInfo: { exp, name, isAdmin, preferred_username }
    }
}

export default checkLogin