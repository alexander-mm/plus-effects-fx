import { canon1 } from '../assets/images'
import { arrowRight } from '../assets/icons/'

const Home = () => {

    return (
        <section className='bg-black pt-12'>
            <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen xl:min-h-[91vh] max-container gap-10 pb-8 sm:pb-14 xl:py-20">

                <div className="w-full xl:w-2/5 relative flex flex-col justify-center items-start mt-28">

                    <div className="flex flex-col relative z-[9] text-pale-red ml-6 gap-y-6 xl:gap-y-12">
                        <span className="text-white  font-montserrat text-[28px] md:text-[35px] lg:whitespace-nowrap">Equipos a la vanguardia mundial !</span>
                        <span className="text-white font-montserrat font-bold text-[54px] md:text-[70px] xl:mt-2">Nuestra Estrella</span>
                        <span className="text-white font-sterilict text-[55px] md:text-[65px]">ESPUMA<span className='text-pale-red font-sterilict'> - One</span></span>
                        <div className='text-center mt-16 hidden xl:block'>
                            <p className="text-white text-lg font-montserrat">Explore todo nuestro catálogo de cañones de espuma.</p>
                            <button type='button' className='bg-white mt-8 py-2 px-4 rounded-2xl cursor-pointer hover:bg-black hover:border hover:border-white'>
                                <a
                                    className='flex flex-row justify-center items-center text-black hover:text-white font-palanquin font-bold'
                                    href="/maquinas"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    EXPLORAR
                                    <img src={arrowRight} className='w-9 ml-2' alt="shop icon" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="
                    bg-black
                        flex flex-1 relative 
                        justify-center items-center
                        border-2 border-white/50 rounded-2xl
                        px-[1em] 
                        mx-[1em] sm:mx-[2em] md:mx-[8em] xl:mx-[4em]
                        xl:mt-[8rem]
                    ">
                    <img src={canon1} alt="canon collection" width={610} height={500} className=" object-contain relative z-1" />
                </div>

                <div className='text-center mt-4 xl:hidden'>
                    <p className="text-white text-lg font-montserrat">Explore todo nuestro catálogo de cañones de espuma.</p>
                    <button type='button' className='bg-white mt-8 py-2 px-4 rounded-2xl cursor-pointer'>
                        <a
                            className='flex flex-row justify-center items-center text-black font-palanquin font-bold'
                            href="/maquinas"
                            target="_blank" rel="noopener noreferrer"
                        >
                            EXPLORAR
                            <img src={arrowRight} className='w-9 ml-2' alt="shop icon" />
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;