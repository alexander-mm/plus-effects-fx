import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { canon1 } from '../assets/images'
import shopIcon from '../assets/icons/shop-icon.png'
import { machines, detailsGalery } from '../constants'
import CanonCard from '../components/CanonCard'
import { arrowRight } from '../assets/icons/'
import ImageModal from '../components/ImageModal';
import closeButton from '../assets/icons/red-close-button.svg'
import PulseRedPoint from '../components/PulseRedPoint'
import RedBackground from '../components/RedBackground'
import FloatingButton from '../components/FloatingButton';
import screenfull from 'screenfull';

const EspumaOne = () => {

    const { t, i18n } = useTranslation();
    const videoRef = useRef(null);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    useEffect(() => {
        const elementoEspecifico = document.getElementById('one');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const [bigCanonImg, setBigCanonImg] = useState(canon1)

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
        <section id='one' className='bg-black pb-10'>
            <FloatingButton />
            <div className='flex justify-center'>
                <span className="text-white font-sterilict pt-10 text-[40px] md:text-[55px] xl:text-[65px]">ESPUMA<span className='text-pale-red font-sterilict'> - One</span></span>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-around max-container">
                <div className="
                    bg-black
                        flex relative 
                        justify-center items-center
                        border-2 border-white/50 rounded-2xl
                        px-[1em]  xl:px-[2em]
                        pb-[9em] sm:pb-[12em] md:pb-[12em] lg:pb-[12em] xl:pb-[em]
                        pt-[1em] md:pt-[3em]  xl:pt-[1em]
                        mx-8 md:mx-[7em] lg:mx-[15em] xl:mx-[-20em]
                        mb-8 xl:mb-[5em]
                        mt-[2em]
                        xl:ml-[2em]
                    ">
                    <img src={bigCanonImg} alt="canon collection" width={610} height={500} className=" object-contain relative z-1" />
                    <div className='flex sm:gap-6 gap-4 absolute -bottom-[-5%]  max-sm:px-6'>
                        {machines.map((image, index) => (
                            <div key={index}>
                                <CanonCard
                                    index={index}
                                    imgURL={image}
                                    changeBigCanonImage={(canon) => setBigCanonImg(canon)}
                                    bigCanonImg={bigCanonImg}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col ml-16">
                    <div className='flex flex-col font-century justify-center mb-12 xl:mb-0 text-start gap-1 xl:ml-52'>
                        <span className="text-white font-bold text-[25px]">{t('cannon-description')}</span>
                        <span className="text-white text-[20px]">{t('cannon-range')}</span>
                        <span className="text-white text-[20px]">{t('cannon-conex')}</span>
                        <span className="text-white text-[20px]">{t('cannon-waf')}</span>
                        <span className="text-white text-[20px]">{t('cannon-insta')}</span>
                        <span className="text-white text-[20px]">{t('cannon-foam')}</span>
                        <span className="text-white text-[20px]">{t('cannon-liquid')}</span>
                        <span className="text-white text-[20px]">{t('cannon-op')}</span>
                        <span className="text-white text-[20px]">{t('cannon-wire')}</span>
                    </div>
                    <div className='hidden xl:flex gap-2 mt-16'>
                        <button type='button' className='bg-white py-2 px-4 rounded-2xl cursor-pointer'>
                            <Link className='flex justify-center items-center text-black font-century font-bold' to="/machines#machines">
                                <img src={arrowRight} className='w-9 rotate-180' alt="shop icon" />
                                {t('back-button')}
                            </Link>
                        </button>
                        <button type='button' className='bg-white py-2 px-4 rounded-2xl cursor-pointer hover:bg-green-600'>
                            <a className='flex flex-row justify-center items-center text-black font-century font-bold' href="https://www.masqueunefecto.com/checkout/" target="_blank" rel="noopener noreferrer">
                                {t('buy-button')}
                                <img src={shopIcon} className='w-9 ml-2' alt="shop icon" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-century font-bold text-white text-center my-8 text-3xl'>{t('galery')}</h1>
            </div>
            <div className='flex justify-center flex-wrap sm:mx-2 pb-12'>
                {detailsGalery.map((detalle, index) => (
                    <div key={index} className='flex justify-center mb-[5px] mx-[2px]'>

                        <div className=''
                            style={{
                                backgroundImage: `url("${detalle.background1}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                position: 'relative',
                                maxWidth: '700px',
                                width: '100%',
                                cursor: 'pointer',
                            }}
                            onClick={() => openModal({ type: 'image', url: detalle.imgExpand })}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: 'auto',
                                    backgroundImage: `url("${detalle.background1}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: -1,
                                }}
                            >
                            </div>
                            <RedBackground />
                            <div className='flex justify-center static'>
                                <span className='mb-[14px]  text-white text-center font-century font-semibold absolute inset-x-0 bottom-[-14px] text-[12px] sm:text-[15px] lg:text-[17px]'>
                                    {t(detalle.translationKey)}
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                maxWidth: '700px',
                                height: 'auto',
                                cursor: 'pointer',
                                position: 'relative',
                            }}
                            onClick={() => openModal({ type: 'video', url: detalle.videoExpand })}
                        >
                            <img src={detalle.background2} alt="" />

                            <div className="absolute top-[-14%] sm:top-[-10%] left-[83%] xs:left-[95%] sm:left-[90%]">
                                <PulseRedPoint />
                            </div>
                        </div>
                    </div>
                ))}
                {modalContent.type === 'image' && (
                    <ImageModal imageUrl={modalContent.url} closeModal={closeModal} />
                )}
                {modalContent.type === 'video' && (
                    <div className="p-20 flex-col z-[1000] fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
                        <button
                            onClick={closeModal}
                            className="self-end w-[60px] mt-[em] text-white p-[14px] rounded-md"
                        >
                            <div className='border rounded-full p-[3px]'>
                                <img className="w-full cursor-pointer" src={closeButton} alt="cerrar form" />
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
            <div className='flex justify-center items-center gap-2 m-8 xl:hidden'>
                <button type='button' className='bg-white py-2 px-2 rounded-2xl cursor-pointer'>
                    <Link
                        className='flex flex-row-reverse justify-center items-center text-black font-century font-bold pr-2'
                        to="/machines#machines"
                    >
                        {t('back-button')}
                        <img src={arrowRight} className='w-9 rotate-180' alt="shop icon" />
                    </Link>
                </button>
                <button type='button' className='bg-white py-2 px-6 rounded-2xl cursor-pointer'>
                    <a className='flex flex-row justify-center items-center gap-1 text-black font-century font-bold' href="https://api.whatsapp.com/send?phone=593980429801&text=Hola,%20estoy%20interesad@%20en%20el%20cañon%20de%20Espuma%20One" target="_blank" rel="noopener noreferrer">
                        {t('buy-button')}
                        <img src={shopIcon} className='w-9 ml-2' alt="shop icon" />
                    </a>
                </button>
            </div>
        </section >
    );
};

export default EspumaOne;