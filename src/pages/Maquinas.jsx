import { Link } from 'react-router-dom'
import { maquinasEspuma } from '../constants'
import { arrowRight } from '../assets/icons/'

const Insumos = () => {

    return (
        <section className='bg-black'>

            <h1 className='text-white text-center font-microflf pt-[3.5em] pb-[1em] text-[40px]'>CAÑÓNES DE ESPUMA</h1>

            <div className='flex flex-row justify-center mb-20'>
                <div className=''>
                    <h2 className='border-t border-white-400/10 text-white text-center font-microflf py-[1em] xl:pb-[0] text-[34px]'>ESPUMA <span className='inline-block text-pale-red'>ONE</span></h2>
                    <div className="w-full flex flex-wrap gap-6 sm:gap-10 justify-center max-container xl:pt-[2em] pb-[2em]">
                        {maquinasEspuma.map((articulo, index) => (
                            <div key={index} className="flex flex-col gap-y-2 mx-2 border px-2 md:px-0 py-4 rounded-md">
                                <Link to={articulo.to}>
                                    <img
                                        src={articulo.thumbnail}
                                        alt={`Máquina ${index + 1}`}
                                        className="w-[25em] md:w-[30em]"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <button type='button' className='gap-2 font-palanquin font-bold  mt-8 py-2 px-4 rounded-2xl cursor-pointer bg-white hover:text-white hover:bg-black hover:border hover:border-white'>
                            <Link className='flex flex-row items-center' to="/espumaone">
                                <img src={arrowRight} className='w-6 h-5' alt="shop icon" />
                                LEER MÁS...
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Insumos;