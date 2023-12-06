import CerrarBtn from '../assets/icons/cerrar.svg'

const ImageModal = ({ imageUrl, closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-[.88] z-[1000]">
            <div className="flex flex-col items-end bg-black p-4 rounded-lg shadow-lg">
                <button
                    onClick={closeModal}
                    className="w-[60px] my-1 text-white p-[14px] rounded-md"
                >
                    <div className='border rounded-full p-[3px]'>
                        <img className="w-full cursor-pointer" src={CerrarBtn} alt="cerrar form" />
                    </div>

                </button>
                <img src={imageUrl} className="w-full rounded-xl" alt="Large Image" />
            </div>
        </div>
    );
};

export default ImageModal;
