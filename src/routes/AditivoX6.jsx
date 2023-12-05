import { Link } from 'react-router-dom'
import { colorantex6 } from "../assets/shop-items";
import { arrowRight } from '../assets/icons/'
import shopIcon from '../assets/icons/shop-icon.png'

const AditivoX6 = () => {
    return (
        <section className='bg-black'>
            <div className="w-full flex flex-col justify-center gap-y-10 min-h-screen max-container py-20 xl:py-0">
                <h1 className='text-white text-center font-microflf text-[40px]'>ESPUMA <span className="text-pale-red">XCOLOR</span></h1>

                <div className="flex flex-col lg:flex-row justify-center items-center mt:0 md:mt-10">

                    <div className="text-white text-center mb-12 lg:mb-0 mx-8 lg:mx-14">
                        <p className="font-microflf mb-8 text-3xl">COLORANTE 6 UNIDADES</p>
                        <h1 className="font-montserrat text-xl font-bold mb-2">DESCRIPCION:</h1>
                        <p className="font-montserrat text-lg">Aditivo de color para líquido de espuma. Cada unidad es soluble en 3 o 4 bidones de Espuma XPLUS.</p>
                        <p className="font-montserrat text-lg mt-16">Disponibles en 6 colores:</p>
                        <div className='flex flex-row flex-wrap xl:flex-nowrap gap-12 justify-center my-6'>
                            <div className='p-6 w-2 bg-pale-red rounded-full'>
                            </div>
                            <div className='p-6 w-2 bg-blue-700 rounded-full'>
                            </div>
                            <div className='p-6 w-2 bg-yellow-500 rounded-full'>
                            </div>
                            <div className='p-6 w-2 bg-green-600 rounded-full'>
                            </div>
                            <div className='p-6 w-2 bg-orange-600 rounded-full'>
                            </div>
                            <div className='p-6 w-2 bg-purple-700 rounded-full'>
                            </div>
                        </div>

                        <button type='button' className='bg-white mt-10 py-2 px-6 rounded-2xl cursor-pointer'>
                            <a className='flex flex-row justify-center items-center gap-3 text-black font-palanquin font-bold' href="https://api.whatsapp.com/send?phone=573186441844&text=Hola,%20estoy%20interesad@%20en%20el%20paquete%20de%206%20colorantes%20para%20Espuma" target="_blank" rel="noopener noreferrer">COMPRAR
                                <img src={shopIcon} className='w-9 ml-2' alt="shop icon" />
                            </a>
                        </button>
                    </div>

                    <div className="bg-black flex flex-row justify-center items-center border-2 border-white/50 rounded-2xl mx-10 xl:mx-0">
                        <img src={colorantex6} alt="canon collection" className=" object-contain relative z-1" />
                    </div>
                </div>

                <div className='text-center xl:mt-12'>
                    <button type='button' className='bg-white mt-8 py-2 px-4 rounded-2xl cursor-pointer'>
                        <Link
                            className='flex flex-row-reverse justify-center items-center text-black font-palanquin font-bold'
                            to="/insumos&accs"
                        >
                            VOLVER A INSUMOS & ACCS
                            <img src={arrowRight} className='w-9 rotate-180' alt="shop icon" />
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AditivoX6