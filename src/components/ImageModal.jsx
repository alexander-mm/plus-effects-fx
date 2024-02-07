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
                className="self-end w-[60px] mt-[em] text-white p-[14px]"
            >
                <div className='border p-[3px] relative left-16 bottom-2'>
                    <img className="w-full cursor-pointer" src={closeButton} alt="close" />
                </div>
            </button>
            <div
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: -1,
                    overflow: 'hidden',
                }}
                ref={imgRef}
            >
                <img
                    src={imageUrl}
                    alt="modal image"
                    className="w-full h-full object-cover"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
        </div>
    );
};

export default ImageModal;