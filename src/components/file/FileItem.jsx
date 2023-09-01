import AvatarFile from './avatarFile'
import Download from '../../assets/image/download.png'
import useDownloadFile from '../../services/home/useDownloadFile';
function FileItem({ data }) {

    const { downloadFile } = useDownloadFile()

    return (
        <div className={`relative flex w-full rounded-[0.42188rem] justify-start items-start gap-[0.70313rem] p-2 kb-shadow-white-bg`}>

            <AvatarFile name={data?.name} />

            <div className="flex justify-between items-start flex-[1_0_0] self-stretch">
                <div className="flex flex-col items-center gap-[0.1875rem] flex-[1_0_0]">
                    <div className="flex items-start gap-[0.5625rem] self-stretch">
                        <div className="p1-b kb-text-primary-gradient">
                            {data?.parentName}
                        </div>

                        <div className="flex items-center gap-[0.23438rem] flex-[1_0_0] self-stretch">
                            <i className="fa-solid fa-paperclip fa-sm text-kb-neutral-300"></i>
                            <div className="p3-b text-kb-neutral-300">2 files</div>
                        </div>
                    </div>

                    <h4 className="self-stretch text-kb-second-color">
                        {data?.name}
                    </h4>

                    <div
                        onClick={() => { localStorage.setItem('fileName', JSON.stringify(data?.name)); downloadFile(data?.id) }}
                        className="self-stretch ml-5"
                        title='Download File'
                    >

                        <img
                            src={Download}
                            onClick={() => { }}
                            width={22}


                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between items-end self-stretch">
                    <img
                        className="w-6 h-6 rounded-3xl border border-kb-primary-color"
                        src="https://via.placeholder.com/24x24"
                    />

                    <div className="flex flex-col justify-end items-end flex-[1_0_0]">
                        <div className="self-end p2-b text-kb-second-color">
                            {data?.author}
                        </div>
                        <div className="self-stretch text-kb-neutral-300 p3-r">
                            {data?.createAt}
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default FileItem
