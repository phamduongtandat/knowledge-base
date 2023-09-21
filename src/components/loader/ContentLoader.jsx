import './ContentLoader.css'

function ContentLoader() {
    const face = [1, 2, 3, 4, 5, 6]
    return (
        <div className="spinner">

            {face.map(i => <div key={i} className="flex justify-center items-center l1-b text-kb-neutral-white " >
                KB
            </div>)}

        </div>
    )
}

export default ContentLoader
