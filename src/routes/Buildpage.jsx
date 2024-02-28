import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { arrowRight } from '../assets/icons/'
import FloatingButton from '../components/FloatingButton';

const Buildpage = () => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
            <FloatingButton />
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">{t('sorry')}...</h1>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl">{t('building')}</p>
                <button type='button' className='bg-white py-2 px-2 rounded-2xl cursor-pointer mt-16'>
                    <Link
                        className='flex justify-center items-center text-black font-palanquin font-bold'
                        to="/#inicioHome"
                    >
                        {t('back-button')}
                        <img src={arrowRight} className='w-9 rotate-180' alt="shop icon" />
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Buildpage