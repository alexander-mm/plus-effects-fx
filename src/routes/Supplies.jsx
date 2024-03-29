import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { foamFluid } from '../constants'
import { additives } from '../constants'
import { accesories } from '../constants'
import shopIcon from '../assets/icons/shop-icon.png'

const Supplies = () => {

    const { t } = useTranslation();

    useEffect(() => {
        const elementoEspecifico = document.getElementById('supplies');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section id='supplies' className='bg-black'>
            <h1 className='text-white text-center font-century font-bold pt-[3.5em] pb-[0.5em] text-[40px]'>{t('supplies')}</h1>
            <h2 className='border-t border-white-400/10 text-white text-center font-century py-[1em] xl:pb-[0] text-[30px]'>{t('fluid')}<span className='inline-block text-pale-red'>{t('foam2')}</span></h2>
            <div className="w-full flex flex-wrap gap-6 sm:gap-10 justify-center max-container xl:pt-[4em] pb-[6em]">
                {foamFluid.map((articulo, index) => (
                    <div key={index} className="flex flex-col gap-y-2 mx-2 border px-2 md:px-0 py-4">
                        <Link to={articulo.to}>
                            <img
                                src={articulo.thumbnail}
                                alt={`Máquina ${index + 1}`}
                                className="w-[10em] md:w-[15em]"
                            />
                        </Link>
                        <p className='text-white text-center text-[14px] font-century font-bold'>{articulo.nombre}</p>
                        <div className='flex flex-row justify-around items-center'>
                            <p className='text-white text-center font-century text-sm md:text-[16px]'>{t(articulo.translationKey)}</p>
                            <button type='button' className='bg-white px-2 w-9 h-8  cursor-pointer'>
                                <Link to="https://api.whatsapp.com/send?phone=593980429801&text=Hola,%20quiero%20comprar%20liquido%20de%20espuma%20en%20presentación%20:" target="_blank" rel="noopener noreferrer">
                                    <img src={shopIcon} className='w-6 h-5' alt="shop icon" />
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className='border-t border-white-400/10 text-white text-center font-century py-[1em] xl:pb-[0] text-[30px]'>{t('color')}<span className='inline-block text-pale-red'>{t('adds')}</span> </h2>
            <div className="w-full flex flex-wrap gap-6 sm:gap-10 justify-center max-container xl:pt-[4em] pb-[6em]">
                {additives.map((aditivo, index) => (
                    <div key={index} className="flex flex-col gap-y-2 mx-2 border px-2 md:px-0 py-4">
                        <Link to={aditivo.to}>
                            <img
                                src={aditivo.thumbnail}
                                alt={`Máquina ${index + 1}`}
                                className="w-[10em] md:w-[15em]"
                            />
                        </Link>
                        <p className='text-white text-center text-[14px] font-century font-bold'>{aditivo.nombre}</p>
                        <div className='flex flex-row justify-around items-center'>
                            <p className='text-white text-center font-century text-sm md:text-[16px]'>{t(aditivo.translationKey)}</p>
                            <button type='button' className='bg-white px-2 w-9 h-8  cursor-pointer'>
                                <a href="https://api.whatsapp.com/send?phone=593980429801&text=Hola,%20quiero%20comprar%20colorante%20para%20espuma%20en%20presentación%20:" target="_blank" rel="noopener noreferrer">
                                    <img src={shopIcon} className='w-6 h-5' alt="shop icon" />
                                </a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className='text-white text-center font-century font-bold pt-[1em] pb-[0.5em] text-[40px]'>{t('accs')}</h1>
            <h2 className='border-t border-white-400/10 text-white text-center font-century py-[1em] xl:pb-[0] text-[30px]'>{t('refax')}<span className='inline-block text-pale-red'>/ AUX</span> </h2>
            <div className="w-full flex flex-wrap gap-6 sm:gap-10 justify-center max-container xl:pt-[4em] pb-[6em]">
                {accesories.map((accs, index) => (
                    <div key={index} className="flex flex-col gap-y-2 mx-2 border px-2 md:px-0 py-4">
                        <Link className='flex justify-center items-center' to={accs.to}>
                            <img
                                src={accs.thumbnail}
                                alt={`Máquina ${index + 1}`}
                                className="w-[10em] md:w-[15em]"
                            />
                        </Link>
                        <p className='text-white text-center font-century font-bold'>
                            {t(accs.translationKey)}</p>
                        <div className='flex flex-row justify-around items-center px-4'>
                            <p className='text-white text-center font-century font-bold'>{t('machine')}<span className=' font-normal'>{accs.equipo}</span></p>
                            <button type='button' className='bg-white ml-2 px-2 w-9 h-8  cursor-pointer'>
                                <Link to="https://api.whatsapp.com/send?phone=593980429801&text=Hola,%20estoy%20interesad@%20en%20este%20accesorio%20:" target="_blank" rel="noopener noreferrer">
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



export default Supplies;