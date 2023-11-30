import { useState } from 'react'
import { Link } from 'react-router-dom'
import { canon1 } from '../assets/images'
import shopIcon from '../assets/icons/shop-icon.png'
import { machines } from '../constants'
import CanonCard from '../components/CanonCard'
import { arrowRight } from '../assets/icons/'

const Maquinas = () => {

    const [bigCanonImg, setBigCanonImg] = useState(canon1)

    return (
        <section className='bg-black'>
            <div className='flex justify-center'>
                <span className="text-white font-sterilict pt-10 text-[40px] md:text-[55px] xl:text-[65px]">ESPUMA<span className='text-pale-red font-sterilict'> - One</span></span>
            </div>

            <div className="w-full flex xl:flex-row flex-col-reverse justify-center min-h-[92vh] max-container gap-14 xl:gap-0 xl:py-[4em]">

                <div className='flex justify-center items-center gap-2  xl:hidden'>
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

                <div className="
                    bg-black
                        flex relative 
                        justify-center items-center
                        border-2 border-white/50 rounded-2xl
                        px-[1em]  xl:px-[2em]
                        pb-[9em] sm:pb-[12em] md:pb-[12em] lg:pb-[12em] xl:pb-[14em]
                        pt-[1em] md:pt-[3em]  xl:pt-[1em]
                        mx-8 md:mx-[7em] lg:mx-[15em] xl:mx-[0em]
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


                <div className="w-full xl:w-3/6 flex flex-col justify-center mt-8 text-center gap-y-1 xl:mr-[2em] xl:gap-y-10">
                    <span className="text-white font-montserrat text-[24px] md:text-[28px] xl:text-[34px]">El nuevo integrante de la Familia!</span>
                    <span className="text-white font-montserrat text-[25px] xl:text-[30px]">- MAXIMO RENDIMIENTO</span>
                    <span className="text-white font-montserrat text-[25px] xl:text-[30px]">- GRAN ALCANCE</span>
                    <span className="text-white font-montserrat text-[25px] xl:text-[30px]">- PORTABILIDAD</span>

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



        </section>
    );
};

export default Maquinas;