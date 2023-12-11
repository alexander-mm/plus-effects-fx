import { useEffect } from 'react';
import { Link } from 'react-router-dom'
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
            <div className="w-full flex flex-col justify-center items-center min-h-screen xl:min-h-[91vh] max-container gap-10 pb-8 sm:pb-14 xl:py-0">

                <div className='w-4/5 mt-20'>
                    <img src="https://www.masqueunefecto.com/wp-content/uploads/2023/12/IMG_20170806_014802-scaled.jpg" alt="" />
                </div>

                <div className='w-4/5 md:w-4/5 text-white text-lg font-century flex flex-col gap-y-8'>
                    <h1 className='text-[30px] font-bold mb-2 mt-14 leading-7'>Conoce un poco de nuestra trayectoria...</h1>

                    <div className='flex flex-col gap-y-12'>

                        <div className='flex flex-col lg:flex-row justify-center items-center gap-y-8 md:gap-x-8'>
                            <p>
                                La historia de +FX tiene sus raíces en el año 2013, durante la emocionante primera fiesta de espuma, respaldada por <a href="https://espumaplay.com/" className='font-bold text-pale-red'>Espuma Play</a>. En aquel entonces, nació el primer equipo de espuma conocido como <span className='font-bold'>{`"Espuma Gun X"`}</span>, diseñado específica y exclusivamente para la cobertura de eventos por parte de <a href="https://espumaplay.com/" className='font-bold text-pale-red'>Espuma Play</a> .
                            </p>

                            <figure className='flex flex-col items-center'>
                                <img className='w-[400px] sm:w-[350px] lg:w-[1500px] border border-white-400 rounded-lg p-5' src="https://www.masqueunefecto.com/wp-content/uploads/2023/12/espuma-first-e1702308778615.png" alt="" />
                                <figcaption className='text-white text-sm text-center'>Espuma Gun X</figcaption>
                            </figure>

                        </div>
                        <div className='flex flex-col lg:flex-row-reverse justify-center items-center gap-y-8 md:gap-x-8'>
                            <p>
                                En 2017, dimos un paso significativo al lanzar al mercado el <span className='font-bold'>{`"Espuma PRO (MHB-400 PRO MKI)"`}</span>
                                , el primer cañón de espuma comercial disponible para la venta. Éste equipo se destacó por su eficiencia en el consumo de agua y líquido espumante.
                            </p>

                            <figure className='flex flex-col items-center'>
                                <img className='w-[400px] sm:w-[350px] lg:w-[1000px] border border-white-400 rounded-lg p-5' src="https://www.masqueunefecto.com/wp-content/uploads/2023/12/fcm-400.png" alt="" />
                                <figcaption className='text-white text-sm text-center'>Espuma PRO (MHB-400 PRO MKI)</figcaption>
                            </figure>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-y-8 md:gap-x-8'>
                            <p>
                                Continuando con nuestro compromiso de innovación, en 2018 presentamos el cañón <span className='font-bold'>{`"Espuma SP (FCM-350 MKI)"`}</span>, heredero del sistema de generación de espuma y la geometría de los cañones Espuma Gun X. Éste modelo no solo mantuvo altos estándares de calidad, sino que también logró reducir considerablemente el tamaño y peso en comparación con su antecesor Espuma PRO.
                            </p>
                            <figure className='flex flex-col items-center'>
                                <img className='w-[400px] sm:w-[350px] lg:w-[1500px] border border-white-400 rounded-lg p-5' src="https://www.masqueunefecto.com/wp-content/uploads/2023/12/fcm-350-e1702309193587.png" alt="" />
                                <figcaption className='text-white text-sm text-center'>Espuma SP (FCM-350 MKI)</figcaption>
                            </figure>
                        </div>
                        <div className='flex flex-col lg:flex-row-reverse justify-center items-center gap-y-8 md:gap-x-8'>
                            <p>
                                En el año 2019 marcamos un hito con el desarrollo de la versión <span className='font-bold'>{`"MKII"`}</span> del Espuma SP, con un alcance extendido de 8 metros, y la versión <span className='font-bold'>{`"MKII"`}</span> del Espuma Pro, que alcanza impresionantes 12 metros de cobertura.
                            </p>
                            <figure className='flex flex-col items-center'>
                                <img className='w-[400px] sm:w-[350px] lg:w-[1500px] border border-white-400 rounded-lg p-5' src="https://www.masqueunefecto.com/wp-content/uploads/2023/12/espuma-sp-e1702309916545.png" alt="" />
                                <figcaption className='text-white text-sm text-center'>Espuma SP (FCM-350 MKII)</figcaption>
                            </figure>
                            <figure className='flex flex-col items-center'>
                                <img className='w-[400px] sm:w-[350px] lg:w-[1500px] border border-white-400 rounded-lg p-5' src="https://www.masqueunefecto.com/wp-content/uploads/2023/12/mhb-400-e1702311833979.png" alt="" />
                                <figcaption className='text-white text-sm text-center'>Espuma PRO (MHB-400 PRO MKII)</figcaption>
                            </figure>



                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-y-8 md:gap-x-8'>
                            <p>
                                Hoy en día, nos enorgullece presentar el <span className='font-bold'>{`"Espuma One (FCM-350 MKIII)"`}</span>, una máquina que encapsula lo mejor de todos nuestros avances hasta la fecha. Éste equipo refleja más de una década de experiencia dedicada al cubrimiento de eventos de la mano de <a href="https://espumaplay.com/" className='font-bold text-pale-red'>Espuma Play</a>.
                            </p>
                            <figure className='flex flex-col items-center'>
                                <img className='w-[400px] sm:w-[350px] lg:w-[1300px] border border-white-400 rounded-lg p-5' src="https://www.masqueunefecto.com/wp-content/uploads/2023/12/one-2023-e1702310370431.png" alt="" />
                                <figcaption className='text-white text-sm text-center'>Espuma One (FCM-350 MKIII)</figcaption>
                            </figure>
                        </div>

                    </div>
                </div>

                <div className='text-center hidden xl:flex flex-col justify-center items-center'>
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
        </section >
    );
};

export default Home;