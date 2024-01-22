import { useRef } from 'react';
import closeButton from '../assets/icons/red-close-button.svg';

// eslint-disable-next-line react/prop-types
const ImageModal = ({ imageUrl, closeModal }) => {
    const imageRef = useRef(null);

    const toggleFullscreen = () => {
        if (imageRef.current) {
            if (imageRef.current.requestFullscreen) {
                imageRef.current.requestFullscreen();
            } else if (imageRef.current.mozRequestFullScreen) {
                imageRef.current.mozRequestFullScreen();
            } else if (imageRef.current.webkitRequestFullscreen) {
                imageRef.current.webkitRequestFullscreen();
            } else if (imageRef.current.msRequestFullscreen) {
                imageRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-[.88] z-50">
            <div className="flex flex-col items-end bg-black p-4 rounded-lg shadow-lg">
                <button onClick={closeModal} className="w-[60px] my-1 text-white p-[14px] rounded-md">
                    <div className='border rounded-full p-[3px]'>
                        <img className="w-full cursor-pointer" src={closeButton} alt="cerrar form" />
                    </div>
                </button>
                <div
                    ref={imageRef}
                    onClick={toggleFullscreen}
                    className="cursor-pointer"
                >
                    <img src={imageUrl} className="w-full rounded-xl" alt="Large Image" />
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
