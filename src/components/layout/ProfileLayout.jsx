

function ProfileLayout({ children }) {
    return (
        <div className="flex items-start 2xl:gap-6 md:gap-[1.1rem] flex-[1_0_0] self-stretch md:min-h-[610px] 2xl:min-h-[922px] max-h-full">
            {children}
        </div>
    )
}

export default ProfileLayout
