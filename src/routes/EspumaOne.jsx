import { useState } from 'react'
import { Link } from 'react-router-dom'
import { canon1 } from '../assets/images'
import shopIcon from '../assets/icons/shop-icon.png'
import { machines, galeriaDetalles } from '../constants'
import CanonCard from '../routes/CanonCard'
import { arrowRight } from '../assets/icons/'
import ImageModal from './ImageModal';
import CerrarBtn from '../assets/icons/cerrar.svg'
import Pulso from './Pulso'

const Maquinas = () => {

    const [bigCanonImg, setBigCanonImg] = useState(canon1)
    const [modalContent, setModalContent] = useState({
        type: null, // "image" or "video"
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
        <section className='bg-black pb-10'>

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
                                    changeBigCanonImage={(shoe) => setBigCanonImg(shoe)}
                                    bigCanonImg={bigCanonImg}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-center mb-12 text-center xl:ml-96 gap-1">
                    <span className="text-white font-microflf text-[25px]">DESCRIPCIÓN:</span>
                    <span className="text-white font-montserrat text-[20px]">- Alcance real hasta 8 metros.</span>
                    <span className="text-white font-montserrat text-[20px]">- Conexión directa a llaves de agua.</span>
                    <span className="text-white font-montserrat text-[20px]">- Sistema WAF MIX de agua y líquido de espuma.</span>
                    <span className="text-white font-montserrat text-[20px]">- Fácil instalación, sin herramientas!.</span>
                    <span className="text-white font-montserrat text-[20px]">- Espuma seca y voluminosa.</span>
                    <span className="text-white font-montserrat text-[20px]">- Baja presión de operación.</span>
                    <span className="text-white font-montserrat text-[20px]">- 10 metros de cable.</span>
                    <span className="text-white font-montserrat text-[20px]">- Bajo consumo de líquido espumante.</span>
                    <div className='hidden xl:flex xl:justify-center gap-2 xl:items-center mt-16'>
                        <button type='button' className='bg-white py-2 px-2 rounded-2xl cursor-pointer'>
                            <Link className='flex justify-center items-center text-black font-palanquin font-bold' to="/maquinas">
                                <img src={arrowRight} className='w-9 rotate-180' alt="shop icon" />
                            </Link>
                        </button>
                        <button type='button' className='bg-white py-2 px-4 rounded-2xl cursor-pointer hover:bg-green-600'>
                            <a className='flex flex-row justify-center items-center text-black font-palanquin font-bold' href="https://api.whatsapp.com/send?phone=573186441844&text=Hola,%20estoy%20interesad@%20en%20el%20cañon%20de%20Espuma%20One" target="_blank" rel="noopener noreferrer">COMPRAR
                                <img src={shopIcon} className='w-9 ml-2' alt="shop icon" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center flex-wrap sm:mx-2 pb-12'>
                {galeriaDetalles.map((detalle, index) => (

                    <div key={index} className='flex justify-center'>

                        <div
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

                            <div
                                className='bg-pale-red opacity-20 h-full w-full cursor-pointer'
                            ></div>
                            <div className='absolute top-[-12%] sm:top-[-10%] left-[85%]'>
                                <Pulso />
                            </div>
                            <div className='flex justify-center static'>

                                <span className='  mb-[14px] absolute inset-x-0 bottom-[-14px] text-[12px] sm:text-[15px] lg:text-[17px] text-white text-center font-semibold'>
                                    {detalle.bottomText}
                                </span>
                            </div>

                        </div>

                        <div
                            style={{
                                width: '100%',
                                maxWidth: '700px',
                                height: 'auto',
                                cursor: 'pointer',
                                position: 'relative', // Añade esta propiedad para que los elementos hijos se posicionen relativamente al contenedor
                            }}
                            onClick={() => openModal({ type: 'video', url: detalle.videoExpand })}
                        >
                            <img src={detalle.background2} alt="" />

                            {/* Agrega TuComponente sobre la imagen */}
                            <div className="absolute top-[-12%] sm:top-[-10%] left-[85%]">
                                <Pulso />
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
                                <img className="w-full cursor-pointer" src={CerrarBtn} alt="cerrar form" />
                            </div>
                        </button>
                        <video className="w-full md:h-full" autoPlay controls>
                            <source src={modalContent.url} type='video/mp4' />
                        </video>
                    </div>
                )}
            </div>

            <div className='flex justify-center items-center gap-2 m-8 xl:hidden'>
                <button type='button' className='bg-white py-2 px-2 rounded-2xl cursor-pointer'>
                    <Link
                        className='flex flex-row-reverse justify-center items-center text-black font-palanquin font-bold'
                        to="/maquinas"
                    >
                        <img src={arrowRight} className='w-9 rotate-180' alt="shop icon" />
                    </Link>
                </button>
                <button type='button' className='bg-white py-2 px-6 rounded-2xl cursor-pointer'>
                    <a className='flex flex-row justify-center items-center gap-3 text-black font-palanquin font-bold' href="https://api.whatsapp.com/send?phone=573186441844&text=Hola,%20estoy%20interesad@%20en%20el%20cañon%20de%20Espuma%20One" target="_blank" rel="noopener noreferrer">COMPRAR
                        <img src={shopIcon} className='w-9 ml-2' alt="shop icon" />
                    </a>
                </button>
            </div>

        </section >
    );
};

export default Maquinas;