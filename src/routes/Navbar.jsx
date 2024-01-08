import { useState } from 'react'
import Form from './Form'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../constants'
import { Logo } from '../assets/images'
import { hamburger } from '../assets/icons'
import closeBtn from '../assets/icons/close.svg'
import FloatingButton from './FloatingButton'

const Navbar = () => {


    const location = useLocation()

    const [toggle, setToggle] = useState(false)

    const [form, setForm] = useState(false)
    const handleForm = () => {
        setForm(true)
    }

    return (
        <header className='px-4 py-2 lg:px-10 absolute z-10 w-full fondotest'>
            <FloatingButton />
            <nav className='py-4 flex justify-between items-center max-container'>
                <a className='ml-4' href="/#inicioHome">
                    <img src={Logo} alt="Logo"
                        width={100}
                    />
                </a>
                <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link
                                to={item.to}
                                className={`font-century leading-normal text-lg 
                                ${location.pathname === item.to ? 'text-pale-red hover:text-red-600/50  border-white/30 py-1 px-2 rounded-lg' : 'text-white-400/50 hover:text-white'}
                                `}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className='font-century leading-normal text-lg font-bold text-white hover:text-white/70'>
                        <p className='cursor-pointer' onClick={handleForm}>Contacto</p>
                    </li>
                </ul>


                <div className='hidden max-lg:block'>
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
                                        className={`font-montserrat leading-[50px] text-[25px]
                                        ${location.pathname === item.to ? 'text-pale-red' : 'text-white-400/50'}`}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li className='font-montserrat leading-[50px] text-[25px] text-white font-bold'>
                                <p className='cursor-pointer' onClick={() => { handleForm(); setToggle((prev) => !prev); }}>Contacto</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='flex justify-center'>
                {form && <Form setForm={setForm} />}
            </div>
        </header>
    )
}

export default Navbar