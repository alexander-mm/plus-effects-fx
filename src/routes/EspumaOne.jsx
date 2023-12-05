import { useState } from 'react'
import { Link } from 'react-router-dom'
import { canon1 } from '../assets/images'
import shopIcon from '../assets/icons/shop-icon.png'
import { machines } from '../constants'
import CanonCard from '../routes/CanonCard'
import { arrowRight, sampleBanner, sampleImg } from '../assets/icons/'

const Maquinas = () => {

    const [bigCanonImg, setBigCanonImg] = useState(canon1)

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
                <div className="flex flex-col justify-center text-center xl:ml-96 gap-2">

                    <span className="text-white font-microflf text-[25px]">DESCRIPCIÓN:</span>
                    <span className="text-white font-montserrat text-[20px]">- Alcance real hasta 8 metros.</span>
                    <span className="text-white font-montserrat text-[20px]">- Conexión directa a llaves de agua.</span>
                    <span className="text-white font-montserrat text-[20px]">- Sistema WAF MIX de agua y líquido de espuma.</span>
                    <span className="text-white font-montserrat text-[20px]">- Fácil instalación, sin herramientas!.</span>
                    <span className="text-white font-montserrat text-[20px]">- Espuma seca y voluminosa.</span>
                    <span className="text-white font-montserrat text-[20px]">- Baja presión de operación.</span>
                    <span className="text-white font-montserrat text-[20px]">- 10 metros de cable.</span>
                    <span className="text-white font-montserrat text-[20px]">- Bajo consumo de líquido espumante.</span>

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

                    <div className='hidden xl:flex xl:justify-center gap-2 xl:items-center mt-16'>
                        <button type='button' className='bg-white py-2 px-2 rounded-2xl cursor-pointer'>
                            <Link
                                className='flex justify-center items-center text-black font-palanquin font-bold'
                                to="/maquinas"
                            >
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

            <div className='flex justify-center flex-wrap sm:mx-2 '>
                <div className='flex justify-center'>
                    <img src={sampleImg} className=' w-[12rem] sm:w-[20rem]' alt="" />
                    <img src={sampleBanner} className=' w-[12rem] sm:w-[20rem]' alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={sampleImg} className=' w-[12rem] sm:w-[20rem]' alt="" />
                    <img src={sampleBanner} className=' w-[12rem] sm:w-[20rem]' alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={sampleBanner} className=' w-[12rem] sm:w-[20rem]' alt="" />
                    <img src={sampleImg} className=' w-[12rem] sm:w-[20rem]' alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={sampleBanner} className=' w-[12rem] sm:w-[20rem]' alt="" />
                    <img src={sampleImg} className=' w-[12rem] sm:w-[20rem]' alt="" />
                </div>
            </div>

        </section>
    );
};

export default Maquinas;