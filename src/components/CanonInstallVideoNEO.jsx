import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ImageModal from './ImageModal';
import closeButton from '../assets/icons/red-close-button.svg';
import playButton from '../assets/icons/play-button.svg';
import screenfull from 'screenfull';

const CanonInstallVideoNEO = () => {

    const { t, i18n } = useTranslation();
    const videoRef = useRef(null);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const [modalContent, setModalContent] = useState({
        type: null,
        url: null,
    });

    const openModal = (content) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent({
            type: null,
            url: null,
        });
    };

    const handlePlay = () => {
        if (screenfull.isEnabled) {
            screenfull.request(videoRef.current);
        }
    };

    return (
        <div>
            <div>
                <h1 className='font-century text-2xl text-white text-center pt-10 pb-2 mx-4'>
                    {t('canon-video')}
                </h1>
            </div>
            <div className='flex justify-center sm:mx-2 pb-12'>
                <div className='flex justify-center mb-[5px] mx-[2px]'>
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '700px',
                            height: 'auto',
                            cursor: 'pointer',
                        }}
                        onClick={() =>
                            openModal({
                                type: 'video',
                                url: 'https://www.masqueunefecto.com/wp-content/uploads/2026/01/UAXZ1621.mov',
                            })
                        }
                    >
                        <img src='https://www.masqueunefecto.com/wp-content/uploads/2026/02/manual1.jpg' alt='' />
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer',
                                zIndex: 2,
                                width: '80px',
                                height: '80px',
                            }}
                            onClick={() => {
                                openModal({
                                    type: 'video',
                                    url: 'https://www.masqueunefecto.com/wp-content/uploads/2026/01/UAXZ1621.mov',
                                });
                            }}
                        >
                            <img src={playButton} alt='Play' />
                        </div>
                    </div>
                </div>
                {modalContent.type === 'image' && <ImageModal imageUrl={modalContent.url} closeModal={closeModal} />}
                {modalContent.type === 'video' && (
                    <div className='p-20 flex-col z-[1000] fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75' onClick={closeModal}>
                        <button onClick={closeModal} className='self-end w-[60px] mt-[em] text-white p-[14px]'>
                            <div className='border p-[3px]'>
                                <img className='w-full cursor-pointer' src={closeButton} alt='cerrar form' />
                            </div>
                        </button>
                        <video
                            ref={videoRef}
                            className='w-full md:h-full'
                            autoPlay
                            controls
                            onPlay={handlePlay}
                        >
                            <source src={modalContent.url} type='video/mp4' />
                        </video>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CanonInstallVideoNEO;