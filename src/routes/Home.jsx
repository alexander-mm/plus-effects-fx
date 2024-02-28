import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import shopIcon from '../assets/icons/shop-icon.png'
import { arrowRight } from '../assets/icons/'
import '../css/backHome.css'
import SwiperHome from '../components/SwiperHome';

const Home = () => {

    const { t } = useTranslation();

    useEffect(() => {
        const elementoEspecifico = document.getElementById('home');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section id='home' className='bg-black'>
            <div className='flex justify-center'>
                <span className="text-white text-center font-century text-[30px] md:text-[45px] xl:text-[55px] mt-[3em] md:mt-[2em]">{t('welcome')}</span>
            </div>
            <div className='flex justify-center'>
                <span className="text-white font-sterilict text-[40px] md:text-[55px] xl:text-[65px] mt-10">ESPUMA<span className='text-pale-red font-sterilict'> - One</span></span>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-center max-container">
                <div className='flex flex-col justify-around items-center font-century text-white text-lg mx-10 md:mx-32'>
                    <p className='py-4'>
                        {t('first-text')}
                        <span className='font-bold'>{`"ESPUMA ONE (FCM-350 MKIII)"`}</span><br /><br />
                        {t('second-text')}<br /><br />
                        {t('third-text')}
                    </p>
                </div>
            </div>
            <div>
                <SwiperHome />
            </div>
            <div className="w-full flex flex-row justify-center max-container">
                <div className='flex flex-col md:flex-row gap-4 text-base py-8'>
                    <button type='button' className='bg-white py-2 px-2 cursor-pointer'>
                        <Link className='flex justify-center items-center text-black font-century font-bold' to="/espumaone#one">
                            <p className='ml-2'>{t('more-info-button')}</p>
                            <img src={arrowRight} className='w-9' alt="shop icon" />
                        </Link>
                    </button>
                    <button type='button' className='bg-white py-2 px-2 cursor-pointer hover:bg-green-600'>
                        <a className='flex flex-row justify-center items-center text-black font-century font-bold' href="https://api.whatsapp.com/send?phone=593980429801&text=Hola,%20estoy%20interesad@%20en%20el%20cañon%20de%20Espuma%20One" target="_blank" rel="noopener noreferrer">
                            {t('buy-button')}
                            <img src={shopIcon} className='w-9 ml-2' alt="shop icon" />
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;