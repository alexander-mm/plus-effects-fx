import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import ImageModal from './ImageModal';
import CerrarBtn from '../assets/icons/cerrar.svg'

const Buildpage = () => {

    const { i18n } = useTranslation();

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

    return (
        <section id='inicioOne' className='bg-black pt-32  flex flex-col'>
            <div>
                <h1 className='font-century font-bold text-3xl text-white text-center'>VIDEO TUTORIALES</h1>
            </div>
            <div>
                <h1 className='font-century text-xl text-white text-center pt-8 pb-2'>MANUAL DE INSTALACIÓN DEL EQUIPO</h1>
            </div>
            <div className='flex justify-center flex-wrap sm:mx-2 pb-12'>
                <div className='flex justify-center mb-[5px] mx-[2px]'>

                    <div
                    >
                        <div
                            style={{
                                position: 'relative',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: 'auto',
                                backgroundImage: `url("")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                zIndex: -1,
                            }}
                        >
                        </div>
                        <div className='flex justify-center static'>
                            <span className='mb-[14px]  text-white text-center font-century font-semibold absolute inset-x-0 bottom-[-14px] text-[12px] sm:text-[15px] lg:text-[17px]'>
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
                        onClick={() => openModal({ type: 'video', url: "https://www.masqueunefecto.com/wp-content/uploads/2024/01/MANUAL-INSTALACION.mp4" })}
                    >
                        <img src="https://www.masqueunefecto.com/wp-content/uploads/2024/01/min-manual-canon.jpg" alt="" />

                        <div className="absolute top-[-14%] sm:top-[-10%] left-[83%] xs:left-[95%] sm:left-[90%]">
                        </div>
                    </div>
                </div>
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
                                <img className="w-full cursor-pointer" src={CerrarBtn} alt="cerrar form" />
                            </div>
                        </button>
                        <video className="w-full md:h-full" autoPlay controls>
                            <source src={modalContent.url} type='video/mp4' />
                        </video>
                    </div>
                )}
            </div>


            <div>
                <h1 className='font-century text-xl text-white text-center pt-8 pb-2'>MANUAL DE ENSAMBLAJE DE COMPONENTES</h1>
            </div>
            <div className='flex justify-center flex-wrap sm:mx-2 pb-12'>

                <div className='flex justify-center mb-[5px] mx-[2px]'>

                    <div>
                        <div
                            style={{
                                position: 'relative',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: 'auto',
                                backgroundImage: `url("")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                zIndex: -1,
                            }}
                        >
                        </div>
                        <div className='flex justify-center static'>
                            <span className='mb-[14px]  text-white text-center font-century font-semibold absolute inset-x-0 bottom-[-14px] text-[12px] sm:text-[15px] lg:text-[17px]'>
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
                        onClick={() => openModal({ type: 'video', url: "https://www.masqueunefecto.com/wp-content/uploads/2024/01/QR-MANUAL.mp4" })}
                    >
                        <img src="https://www.masqueunefecto.com/wp-content/uploads/2024/01/min-manual-box.jpg" alt="" />

                        <div className="absolute top-[-14%] sm:top-[-10%] left-[83%] xs:left-[95%] sm:left-[90%]">
                        </div>
                    </div>
                </div>
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
                                <img className="w-full cursor-pointer" src={CerrarBtn} alt="cerrar form" />
                            </div>
                        </button>
                        <video className="w-full md:h-full" autoPlay controls>
                            <source src={modalContent.url} type='video/mp4' />
                        </video>
                    </div>
                )}
            </div>
        </section >
    )
}

export default Buildpage