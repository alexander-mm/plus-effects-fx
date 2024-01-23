import closeButton from '../assets/icons/red-close-button.svg';
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
const ImageModal = ({ imageUrl, closeModal }) => {
    const imgRef = useRef(null);

    return (
        <div
            className="p-20 flex-col z-[1000] fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeModal}
        >
            <button
                onClick={closeModal}
                className="self-end w-[60px] mt-[em] text-white p-[14px] rounded-md"
            >
                <div className='border rounded-full p-[3px]'>
                    <img className="w-full cursor-pointer" src={closeButton} alt="cerrar form" />
                </div>
            </button>
            <div
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    zIndex: -1,
                }}
                ref={imgRef}
            >
                <img
                    src={imageUrl}
                    alt="modal image"
                    className="w-full h-auto"
                    style={{
                        objectFit: 'cover',
                        maxHeight: '95vh',
                        maxWidth: '100%', // Ajusta según sea necesario
                    }}
                />
            </div>
        </div>
    );
};

export default ImageModal;
