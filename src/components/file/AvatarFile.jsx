import FileAva from '../../assets/image/fileava.png'

function AvatarFile({ name }) {

    const type = name?.split('.').pop()

    return (
        <div className="relative w-[3.75rem] h-[3.75rem]">
            <img
                className="self-stretch  "
                src={FileAva}
            />

            <div className="absolute l4-b top-4 right-0 uppercase border border-green-700/20 text-purple-700 px-1 bg-kb-primary-gradient rounded-sm">{type}</div>

        </div>

    )
}

export default AvatarFile
