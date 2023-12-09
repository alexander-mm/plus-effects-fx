import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { canon1 } from '../assets/images'
import { arrowRight } from '../assets/icons/'

const Home = () => {

    useEffect(() => {
        const elementoEspecifico = document.getElementById('inicioHome');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section id='inicioHome' className='bg-black pt-6'>
            <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen xl:min-h-[91vh] max-container gap-10 pb-8 sm:pb-14 xl:py-0">

                <div className="w-full xl:w-2/5 relative flex flex-col justify-center items-start mt-28">

                    <div className="flex flex-col relative z-[9] text-pale-red ml-6 gap-y-6 xl:gap-y-12">
                        <span className="text-white font-century font-thin text-[25px] md:text-[35px] lg:whitespace-nowrap">Equipos a la vanguardia mundial !</span>
                        <span className="text-white font-century font-bold text-[51px] md:whitespace-nowrap md:text-[75px] xl:mt-2 xl:bg-black">Nuestra Estrella</span>
                        <span className="text-white font-sterilict text-[53px] md:whitespace-nowrap md:text-[75px]">ESPUMA<span className='text-pale-red font-sterilict xl:bg-black'> - One</span></span>
                        <div className='text-center mt-8 hidden xl:block'>
                            <p className="text-white text-lg font-century">Explore todo el catálogo de nuestros equipos.</p>
                            <button type='button' className='bg-white mt-4 py-2 px-4 rounded-2xl cursor-pointer hover:bg-black border hover:border-white'>
                                <Link
                                    className='flex flex-row justify-center items-center text-black hover:text-white font-century font-bold'
                                    to="/maquinas#inicioMaquina"
                                >
                                    EXPLORAR
                                    <img src={arrowRight} className='w-9 ml-2' alt="go icon" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mx-10 md:mx-40 xl:mr-10 xl:ml-16 xl:mt-32'>
                    <div className="
                    bg-black
                    flex flex-1
                    justify-center items-center
                    border-2 border-white/50 rounded-2xl
                    p-10
                    
                    
                    
                    ">
                        <img src={canon1} alt="canon collection" width={610} height={500} className=" object-contain relative z-1" />
                    </div>
                </div>



                <div className='text-center mt-4 xl:hidden'>
                    <p className="text-white text-lg font-montserrat">Explore todo el catálogo de nuestros equipos.</p>
                    <button type='button' className='bg-white mt-8 py-2 px-4 rounded-2xl cursor-pointer'>
                        <Link
                            className='flex flex-row justify-center items-center text-black font-palanquin font-bold'
                            to="/maquinas#inicioMaquinas"
                        >
                            EXPLORAR
                            <img src={arrowRight} className='w-9 ml-2' alt="shop icon" />
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;