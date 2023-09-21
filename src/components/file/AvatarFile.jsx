import FileAva from '../../assets/image/fileava.png'

function AvatarFile({ name }) {

    const type = name?.split('.').pop()

    return (
        <div className="relative md:w-[3.75rem] md:h-[3.75rem] 2xl:w-[5.3rem] 2xl:h-[5.3rem]">
            <img
                className="self-stretch  "
                src={FileAva}
            />

            <div className="absolute l4-b  uppercase border border-green-700/20 text-purple-700  bg-kb-primary-gradient md:rounded-sm md:top-4 md:right-0 md:px-1 2xl:rounded-lg 2xl:top-5 2xl:right-0 2xl:px-1.5">{type}</div>

        </div>

    )
}

export default AvatarFile
