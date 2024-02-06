import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import shopIcon from '../assets/icons/shop-icon.png'
import { arrowRight } from '../assets/icons/'
import { mainmin } from '../assets/images'
import { homeDetails } from '../constants'
import CanonCard from '../components/CanonCard'
import '../css/backHome.css'

const Home = () => {

    const { t } = useTranslation();

    const [bigCanonImg, setBigCanonImg] = useState(mainmin)

    useEffect(() => {
        const elementoEspecifico = document.getElementById('home');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const sectionStyle = {
        backgroundImage: `url("https://www.masqueunefecto.com/wp-content/uploads/2024/02/banner.jpg")`,
    };

    return (
        <section id='home' style={sectionStyle} className='background-animation flex justify-center flex-col xl:flex-row'>
            <div className="w-full flex flex-col xl:flex-row justify-center max-container pt-28">
                <div className="
                      bg-black
                        bg-opacity-100
                        flex relative 
                        justify-center items-center
                        border-2 border-white/50 rounded-2xl
                        px-[1em]  xl:px-[2em]
                        pb-[9em] sm:pb-[12em] md:pb-[12em] lg:pb-[12em] xl:pb-[em]
                        pt-[1em] md:pt-[3em]  xl:pt-[1em]
                        mx-8 md:mx-[7em] lg:mx-[15em] xl:mx-[-20em]
                        mb-8 xl:mb-[5em]
                        mt-[2em]
                    ">
                    <img src={bigCanonImg} alt="canon collection" width={610} height={500} className=" object-contain relative z-1" />
                    <div className='flex sm:gap-6 gap-4 absolute -bottom-[-5%]  max-sm:px-6'>
                        {homeDetails.map((image, index) => (
                            <div key={index}>
                                <CanonCard
                                    index={index}
                                    imgURL={image}
                                    changeBigCanonImage={(canon) => setBigCanonImg(canon)}
                                    bigCanonImg={bigCanonImg}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-center max-container">
                <div className='
                    bg-opacity-100 bg-black
                    flex flex-col
                    justify-around items-center
                    font-century text-white text-lg
                    border-2 border-white/50 rounded-2xl
                    px-20
                    mx-8 md:mx-28 lg:mx-60 xl:mx-20 mt-0 xl:mt-[9em] mb-10 xl:mb-20'
                >
                    <p className='py-8'>
                        {t('first-text')}
                        <span className='font-bold'>{`"ESPUMA ONE (FCM-350 MKIII)"`}</span><br /><br />
                        {t('second-text')}<br /><br />
                        {t('third-text')}
                    </p>
                    <div className='flex flex-col gap-2 mt-0 text-base py-8'>
                        <button type='button' className='bg-white py-2 px-4 rounded-2xl cursor-pointer'>
                            <Link className='flex justify-center items-center text-black font-century font-bold' to="/espumaone#one">
                                <img src={arrowRight} className='w-9' alt="shop icon" />
                                {t('more-info-button')}
                            </Link>
                        </button>
                        <button type='button' className='bg-white py-2 px-4 rounded-2xl cursor-pointer hover:bg-green-600'>
                            <a className='flex flex-row justify-center items-center text-black font-century font-bold' href="https://api.whatsapp.com/send?phone=593980429801&text=Hola,%20estoy%20interesad@%20en%20el%20cañon%20de%20Espuma%20One" target="_blank" rel="noopener noreferrer">
                                {t('buy-button')}
                                <img src={shopIcon} className='w-9 ml-2' alt="shop icon" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;