import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Form from '../routes/Form'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../constants'
import { logo } from '../assets/images'
import { hamburger } from '../assets/icons'
import closeBtn from '../assets/icons/close.svg'
import FloatingButton from './FloatingButton';
import flagEn from '../assets/icons/ingles.png';
import flagEs from '../assets/icons/español.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const [form, setForm] = useState(false);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    };

    const handleForm = () => {
        setForm(true);
    };

    return (
        <header className='px-4 py-2 lg:px-10 absolute z-10 w-full bg-black'>
            <FloatingButton />

            <nav className='py-2 flex justify-between items-center max-container'>

                <a className='ml-4' href="/#home">
                    <img src={logo} alt="Logo"
                        width={100}
                    />
                </a>
                <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>

                    <div className='mt-2 mr-8 self-center'>
                        <button className='text-white' onClick={() => changeLanguage('en')}>
                            <img className='w-8 h-8 mr-8' src={flagEn} alt="English Flag" />
                        </button>
                        <button className='text-white' onClick={() => changeLanguage('es')}>
                            <img className='w-8 h-8' src={flagEs} alt="Spanish Flag" />
                        </button>
                    </div>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link
                                to={item.to}
                                className={`font-century leading-normal text-lg 
                                ${location.pathname === item.to2 ? 'text-pale-red hover:text-red-600/50  border-white/30 py-1 px-2 rounded-lg' : 'text-white-400/50 hover:text-white'}
                                `}
                            >
                                {t(item.translationKey)}
                            </Link>
                        </li>
                    ))}
                    <li className='font-century leading-normal text-lg font-bold text-white hover:text-white/70'>
                        <p className='cursor-pointer' onClick={handleForm}>{t('contact-nav')}</p>
                    </li>
                </ul>


                <div className='hidden max-lg:flex'>

                    <div className='mt-2 mr-12 self-center'>
                        <button className='text-white' onClick={() => changeLanguage('en')}>
                            <img className='w-7 h-7 mr-6' src={flagEn} alt="English Flag" />
                        </button>
                        <button className='text-white' onClick={() => changeLanguage('es')}>
                            <img className='w-7 h-7' src={flagEs} alt="Spanish Flag" />
                        </button>
                    </div>
                    <img
                        className='mr-4'
                        src={toggle ? closeBtn : hamburger}
                        alt="Hamburger" width={28} height={28}
                        onClick={() => setToggle((prev) => !prev)}
                    />

                    <div className={`${toggle ? 'flex' : 'hidden'} bg-black border border-white/30 text-white-400 rounded-md p-4 absolute top-20 right-1 z-[1000]`}>
                        <ul className='flex flex-col gap-4 justify-end items-center'>
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        onClick={() => setToggle((prev) => !prev)}
                                        to={item.to}
                                        className={`font-century leading-normal text-2xl 
                                        ${location.pathname === item.to2 ? 'text-pale-red  border-white/30 py-1 px-2 rounded-lg' : 'text-white-400/50 hover:text-white'}
                                        `}
                                    >
                                        {t(item.translationKey)}
                                    </Link>
                                </li>
                            ))}
                            <li className='font-montserrat leading-[50px] text-[25px] text-white font-bold'>
                                <p className='cursor-pointer' onClick={() => { handleForm(); setToggle((prev) => !prev); }}>{t('contact-nav')}</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            <div className='flex justify-center'>
                {form && <Form setForm={setForm} />}
            </div></header>
    )
}

export default Navbar