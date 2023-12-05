import { Link } from 'react-router-dom'
import { maquinasEspuma } from '../constants/index'
import { arrowRight } from '../assets/icons/'

const Maquinas = () => {

    return (
        <section className='bg-black'>

            <h1 className='text-white text-center font-microflf pt-[3.5em] pb-[1em] text-[40px]'>CAÑÓNES DE ESPUMA</h1>

            <div className='flex flex-row justify-center'>
                <div className=''>

                    <div className="w-full flex flex-wrap gap-6 sm:gap-10 justify-center max-container pb-[2em]">
                        {maquinasEspuma.map((articulo, index) => (
                            <div key={index} className="flex flex-col border mx-4 md:mx-0 py-4 rounded-md">
                                <span className="text-white text-center font-sterilict text-[25px] mb-6">{articulo.name1}<span className='text-pale-red font-sterilict'>{articulo.name2}</span></span>

                                <Link to={articulo.to}>
                                    <img
                                        src={articulo.thumbnail}
                                        alt={`Máquina ${index + 1}`}
                                        className="w-[30em] md:w-[35em] px-10"
                                    />
                                </Link>
                                <div className='flex justify-end mr-6'>
                                    <button type='button' className='bg-white mt-8 py-2 px-4 rounded-2xl cursor-pointer hover:bg-black hover:border hover:border-white'>
                                        <Link className='flex flex-row justify-center items-center text-black hover:text-white font-palanquin font-bold' to={articulo.to}>
                                            <img src={arrowRight} className='w-7 ml-2' alt="back icon" />
                                            LEER MÁS...
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Maquinas;