//import ContentPage from "../components/container/ContentPage"
import AdminContent from "../components/admin/AdminContent"
import checkLogin from "../utils/checkLogin"

function AccListPage() {

    const { tokenInfo } = checkLogin()
    console.log('admin :', tokenInfo?.isAdmin)

    return (
        <>
            {!tokenInfo?.isAdmin && <h2 className="text-center text-red-700">ONLY FOR ADMIN</h2>}
            {tokenInfo?.isAdmin && <AdminContent />}
        </>
    )
}

export default AccListPage
