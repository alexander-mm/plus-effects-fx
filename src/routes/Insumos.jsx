import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { articulos } from '../constants'
import { aditivos } from '../constants'
import { accesoriosRefaccion } from '../constants'
import shopIcon from '../assets/icons/shop-icon.png'

const Insumos = () => {

    useEffect(() => {
        const elementoEspecifico = document.getElementById('inicioAccs');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section id='inicioAccs' className='bg-black'>

            <h1 className='text-white text-center font-century font-bold pt-[3.5em] pb-[0.5em] text-[40px]'>INSUMOS</h1>

            <h2 className='border-t border-white-400/10 text-white text-center font-century py-[1em] xl:pb-[0] text-[30px]'>LIQUIDO DE <span className='inline-block text-pale-red'>ESPUMA</span></h2>

            <div className="w-full flex flex-wrap gap-6 sm:gap-10 justify-center max-container xl:pt-[4em] pb-[6em]">
                {articulos.map((articulo, index) => (
                    <div key={index} className="flex flex-col gap-y-2 mx-2 border px-2 md:px-0 py-4 rounded-md">
                        <Link to={articulo.to}>
                            <img
                                src={articulo.thumbnail}
                                alt={`Máquina ${index + 1}`}
                                className="w-[10em] md:w-[15em]"
                            />
                        </Link>
                        <p className='text-white text-center text-[14px] font-century font-bold'>{articulo.nombre}</p>

                        <div className='flex flex-row justify-around items-center'>
                            <p className='text-white text-center font-century text-sm md:text-[16px]'>{articulo.descripcion}</p>
                            <button type='button' className='bg-white px-2 rounded-lg w-9 h-8  cursor-pointer'>
                                <Link to="https://api.whatsapp.com/send?phone=573186441844&text=Hola,%20quiero%20comprar%20liquido%20de%20espuma%20en%20presentación%20:" target="_blank" rel="noopener noreferrer">
                                    <img src={shopIcon} className='w-6 h-5' alt="shop icon" />
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className='border-t border-white-400/10 text-white text-center font-century py-[1em] xl:pb-[0] text-[30px]'>ADITIVOS DE <span className='inline-block text-pale-red'>COLOR</span> </h2>

            <div className="w-full flex flex-wrap gap-6 sm:gap-10 justify-center max-container xl:pt-[4em] pb-[6em]">
                {aditivos.map((aditivo, index) => (
                    <div key={index} className="flex flex-col gap-y-2 mx-2 border px-2 md:px-0 py-4 rounded-md">
                        <Link to={aditivo.to}>
                            <img
                                src={aditivo.thumbnail}
                                alt={`Máquina ${index + 1}`}
                                className="w-[10em] md:w-[15em]"
                            />
                        </Link>
                        <p className='text-white text-center text-[14px] font-century font-bold'>{aditivo.nombre}</p>

                        <div className='flex flex-row justify-around items-center'>
                            <p className='text-white text-center font-century text-sm md:text-[16px]'>{aditivo.descripcion}</p>
                            <button type='button' className='bg-white px-2 rounded-lg w-9 h-8  cursor-pointer'>
                                <a href="https://api.whatsapp.com/send?phone=573186441844&text=Hola,%20quiero%20comprar%20colorante%20para%20espuma%20en%20presentación%20:" target="_blank" rel="noopener noreferrer">
                                    <img src={shopIcon} className='w-6 h-5' alt="shop icon" />
                                </a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className='text-white text-center font-century font-bold pt-[1em] pb-[0.5em] text-[40px]'>ACCESORIOS</h1>
            <h2 className='border-t border-white-400/10 text-white text-center font-century py-[1em] xl:pb-[0] text-[30px]'>REFACCIÓNES <span className='inline-block text-pale-red'>/ AUX</span> </h2>

            <div className="w-full flex flex-wrap gap-6 sm:gap-10 justify-center max-container xl:pt-[4em] pb-[6em]">
                {accesoriosRefaccion.map((accs, index) => (
                    <div key={index} className="flex flex-col gap-y-2 mx-2 border px-2 md:px-0 py-4 rounded-md">
                        <Link className='flex justify-center items-center' to={accs.to}>
                            <img
                                src={accs.thumbnail}
                                alt={`Máquina ${index + 1}`}
                                className="w-[10em] md:w-[15em]"
                            />
                        </Link>
                        <p className='text-white text-center font-century font-bold'>{accs.nombre}</p>


                        <div className='flex flex-row justify-around items-center'>
                            <p className='text-white text-center font-century font-bold'>EQUIPO: <span className=' font-normal'>{accs.equipo}</span></p>
                            <button type='button' className='bg-white px-2 rounded-lg w-9 h-8  cursor-pointer'>
                                <Link to="https://api.whatsapp.com/send?phone=573186441844&text=Hola,%20estoy%20interesad@%20en%20este%20accesorio%20:" target="_blank" rel="noopener noreferrer">
                                    <img src={shopIcon} className='w-6 h-5' alt="shop icon" />
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}



export default Insumos;