import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { bidon } from "../assets/shop-items";
import { arrowRight } from '../assets/icons/'
import shopIcon from '../assets/icons/shop-icon.png'
import { bidones } from '../constants'
import BidonCard from './BidonCard';
import FloatingButton from './FloatingButton';

const Bidon = () => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    useEffect(() => {
        const elementoEspecifico = document.getElementById('inicioBidon');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const [bigImg, setBigImg] = useState(bidon)

    return (
        <section id='inicioBidon' className='bg-black'>
            <FloatingButton />
            <div className="w-full flex flex-col justify-center gap-y-10 min-h-screen max-container py-4">
                <h1 className='text-white text-center font-century text-[40px]'>ESPUMA <span className="text-pale-red">XPLUS</span></h1>

                <div className="flex flex-col justify-center items-center mb-12">

                    <div className="text-white text-center ">
                        <p className="font-century text-3xl">{t('bidon20')}</p>
                        <div className="bg-black flex relative justify-center items-center border-2 border-white/50 rounded-2xl px-[1em] xl:px-[2em] pb-[9em] sm:pb-[12em] pt-[1em] md:pt-[3em] xl:pt-[1em] mx-8 md:mx-[7em] mb-8 mt-[2em]">
                            <img src={bigImg} alt="canon collection" width={400} height={500} className="object-contain relative z-1 mb-16 md:mb-8" />

                            <div className='flex absolute -bottom-[-5%] max-sm:px-6 '>
                                {bidones.map((image, index) => (
                                    <div key={index}>
                                        <BidonCard
                                            index={index}
                                            imgURL={image}
                                            changeBigImage={(bidon) => setBigImg(bidon)}
                                            bigImg={bigImg}
                                            shouldRender={(bidon) => bidon.confirm === "bidon"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h1 className="font-century text-xl font-bold mb-2">{t('cannon-description')}:</h1>
                        <p className="font-century text-lg">{t('descrip-bidon')}</p>

                        <div className='flex justify-center items-center mt-10'>
                            <button type='button' className='bg-white py-2 px-4 rounded-2xl cursor-pointer mx-2'>
                                <Link
                                    className='flex flex-row-reverse justify-center items-center text-black font-century font-bold'
                                    to="/insumos&accs#inicioAccs"
                                >
                                    {t('back-button')}
                                    <img src={arrowRight} className='w-9 rotate-180' alt="shop icon" />
                                </Link>
                            </button>
                            <button type='button' className='bg-white py-2 px-6 rounded-2xl cursor-pointer mx-2'>
                                <a className='flex flex-row justify-center items-center gap-3 text-black font-century font-bold' href="https://api.whatsapp.com/send?phone=593980429801&text=Hola,%20estoy%20interesad@%20en%20el%20liquido%20para%20Cañones%20de%20Espuma" target="_blank" rel="noopener noreferrer">{t('buy-button')}
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

export default Bidon