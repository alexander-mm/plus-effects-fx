import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { colorantSix } from "../assets/shop-items";
import { arrowRight } from '../assets/icons'
import shopIcon from '../assets/icons/shop-icon.png'
import { supplies } from '../constants'
import ItemShowCard from '../components/ItemShowCard';
import FloatingButton from '../components/FloatingButton';

const EspumaColorSix = () => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        // Recupera la preferencia de idioma almacenada en localStorage
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    useEffect(() => {
        const elementoEspecifico = document.getElementById('espumacolorsix');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const [bigImg, setBigImg] = useState(colorantSix)

    return (
        <section id='espumacolorsix' className='bg-black'>
            <FloatingButton />
            <div className="w-full flex flex-col justify-center gap-y-10 min-h-screen max-container py-4">
                <h1 className='text-white text-center font-century text-[40px]'>ESPUMA <span className="text-pale-red">XCOLOR</span></h1>
                <div className="flex flex-col justify-center items-center mb-12">
                    <div className="text-white text-center">
                        <p className="font-century mb-8 text-3xl">
                            {t('colorx6')}
                        </p>
                        <div className="bg-black flex relative justify-center items-center border-2 border-white/50 rounded-2xl px-[1em] xl:px-[2em] pb-[9em] sm:pb-[12em] pt-[1em] md:pt-[3em] xl:pt-[1em] mx-8 md:mx-[7em] mb-8 mt-[2em]">
                            <img src={bigImg} alt="canon collection" width={400} height={500} className="object-contain relative z-1 mb-16 md:mb-8" />
                            <div className='flex absolute -bottom-[-5%] max-sm:px-6 '>
                                {supplies.map((image, index) => (
                                    <div key={index}>
                                        <ItemShowCard
                                            index={index}
                                            imgURL={image}
                                            changeBigImage={(canon) => setBigImg(canon)}
                                            bigImg={bigImg}
                                            shouldRender={(bidon) => bidon.confirm === "coloranteX6"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h1 className="font-century text-xl font-bold mb-2">{t('cannon-description')}:</h1>
                        <p className="font-century text-lg">
                            {t('aditivo-desc')}
                        </p>
                        <p className="font-century text-lg font-bold mt-8">
                            {t('available')}:
                        </p>
                        <div className='flex flex-row flex-wrap xl:flex-nowrap gap-12 justify-center mt-4'>
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
                        <div className='flex justify-center items-center mt-10 gap-4 mx-4'>
                            <button type='button' className='bg-white py-2 px-4 rounded-2xl cursor-pointer'>
                                <Link
                                    className='flex flex-row-reverse justify-center items-center text-black font-century font-bold'
                                    to="/supplies#supplies"
                                >
                                    {t('back-button')}
                                    <img src={arrowRight} className='w-9 rotate-180' alt="shop icon" />
                                </Link>
                            </button>
                            <button type='button' className='bg-white  py-2 px-6 rounded-2xl cursor-pointer'>
                                <a className='flex flex-row justify-center items-center gap-3 text-black font-century font-bold' href="https://api.whatsapp.com/send?phone=593980429801&text=Hola,%20estoy%20interesad@%20en%20el%20liquido%20para%20Cañones%20de%20Espuma" target="_blank" rel="noopener noreferrer">
                                    {t('buy-button')}
                                    <img src={shopIcon} className='w-9' alt="shop icon" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EspumaColorSix