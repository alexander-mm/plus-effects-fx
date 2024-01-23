import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { foamMachines } from '../constants/index'
import { arrowRight } from '../assets/icons'

const Machines = () => {

    const { t } = useTranslation();

    useEffect(() => {
        const elementoEspecifico = document.getElementById('machines');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section id="machines" className='bg-black'>
            <h1 className='text-white text-center font-century font-bold pt-[3.5em] pb-[1em] text-[40px]'>{t('cannon-title')}</h1>
            <div className='flex flex-row justify-center'>
                <div>
                    <div className="w-full flex flex-wrap gap-6 sm:gap-10 justify-center max-container pb-[2em]">
                        {foamMachines.map((articulo, index) => (
                            <div key={index} className="flex flex-col border mx-4 md:mx-0 pt-4 rounded-md">
                                <span className="text-white text-center font-sterilict text-[35px] mb-6">{articulo.name1}<span className='text-pale-red font-sterilict'>{articulo.name2}</span></span>
                                <Link to={articulo.to}>
                                    {articulo.thumbnail && (
                                        <img
                                            src={articulo.thumbnail}
                                            alt={`Máquina ${index + 1}`}
                                            className="w-[30em] md:w-[35em] px-10"
                                        />
                                    )}
                                </Link>
                                {articulo.auxText && <span className='text-white text-center text-[20px] font-sterilict px-[65px] md:px-[105px] my-44'>{t(articulo.translationKey)}</span>}

                                <div className='flex justify-end mr-6 mb-6'>
                                    {articulo.thumbnail && (<button type='button' className='bg-white mt-8 py-2 px-4 rounded-2xl cursor-pointer hover:bg-black border hover:border-white'>
                                        <Link className=' flex flex-row justify-center items-center gap-2 text-black hover:text-white font-century font-bold' to={articulo.to}>
                                            <img src={arrowRight} className='w-7 ml-2' alt="back icon" />
                                            {t('read-more-button')}
                                        </Link>
                                    </button>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Machines;