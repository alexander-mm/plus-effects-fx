import { sistemadebombeo } from "../assets/shop-items";
import { arrowRight } from '../assets/icons/'
import shopIcon from '../assets/icons/shop-icon.png'

const KitBombeo = () => {
    return (
        <section className='bg-black'>
            <div className="w-full flex flex-col justify-center gap-y-10 min-h-screen max-container py-20 xl:py-0">
                <h1 className='text-white text-center font-microflf text-[40px]'>KIT <span className="text-pale-red">XBOMBEO</span></h1>

                <div className="flex flex-col lg:flex-row justify-center items-center mt:0 md:mt-10">

                    <div className="text-white text-center mb-12 lg:mb-0 mx-8 lg:mx-14">
                        <p className="font-microflf mb-8 text-3xl">SISTEMA DE BOMBEO AUXILIAR</p>
                        <h1 className="font-montserrat text-xl font-bold mb-2">DESCRIPCION:</h1>
                        <p className="font-montserrat text-lg leading-8">- Bomba de superficie 750W.<br />-Interruptor incorporado.<br />- Cable de conexión a toma corriente eléctrico.<br />- 4 Metros de manguera de 1 Pulgada con refuerzo en acero. <br />- Filtro textil incorporado.</p>
                        <button type='button' className='bg-white mt-10 py-2 px-6 rounded-2xl cursor-pointer'>
                            <a className='flex flex-row justify-center items-center gap-3 text-black font-palanquin font-bold' href="https://api.whatsapp.com/send?phone=573186441844&text=Hola,%20estoy%20interesad@%20en%20el%20kit%20de%20bombeo%20para%20el%20cañon%20Espuma%20One" target="_blank" rel="noopener noreferrer">COMPRAR
                                <img src={shopIcon} className='w-9 ml-2' alt="shop icon" />
                            </a>
                        </button>
                    </div>

                    <div className="bg-black flex flex-row justify-center items-center border-2 border-white/50 rounded-2xl mx-10 xl:mx-0">
                        <img src={sistemadebombeo} alt="canon collection" className=" object-contain relative z-1" />
                    </div>
                </div>

                <div className='text-center xl:mt-12'>
                    <button type='button' className='bg-white mt-8 py-2 px-4 rounded-2xl cursor-pointer'>
                        <a
                            className='flex flex-row-reverse justify-center items-center text-black font-palanquin font-bold'
                            to="/insumos&accs"
                        >
                            VOLVER A INSUMOS & ACCS
                            <img src={arrowRight} className='w-9 rotate-180' alt="shop icon" />
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default KitBombeo