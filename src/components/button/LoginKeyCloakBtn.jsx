
import LogoKeyCloal from '../../assets/image/logo-keycloak.png'
function LoginKeyCloakBtn() {
    return (
        <button
            className="flex 2xl:gap-[0.625rem] md:gap-[0.444rem] justify-center items-center 2xl:w-[548px] md:w-[389px] 2xl:h-[80px] md:h-[56.8px] 2xl:px-9 2xl:py-5 md:px-[28.56px] md:py-[0.8875rem] 2xl:rounded-[16px] md:rounded-[11.36px] bg-kb-keycloak-gradient "
            type="submit"
        >
            <img className="2xl:w-[3.3125rem] 2xl:h-[3.3125rem] md:w-[2.4rem] md:h-[2.4rem]" src={LogoKeyCloal} />
            <h2 className="kb-text-shadow-lg">Login with Keycloak
            </h2>
        </button>
    )
}

export default LoginKeyCloakBtn
