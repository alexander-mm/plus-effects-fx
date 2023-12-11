import { Link } from 'react-router-dom'
import { Logo } from "../assets/images";
import { contactLinks, footerLinks, helpLinks, socialMedia } from "../constants";

const Footer = () => {
    return (
        <footer className=' bg-black pt-10 xl:pt-20 pb-6 px-10'>
            <div className='flex items-center flex-col lg:flex-row justify-around'>

                <div className='flex flex-col items-center my-4 lg:my-0'>
                    <a href='/'>
                        <img
                            src={Logo}
                            alt='logo'
                            width={120}
                        />
                    </a>
                    <p className='text-base font-century text-white-400 sm:max-w-sm mb-2'>
                        Síguenos en redes sociales!
                    </p>
                    <div className='flex items-center gap-4'>
                        {socialMedia.map((icon) => (
                            <div
                                className='flex justify-center items-center w-12 h-12 rounded-full'
                                key={icon.alt}
                            >
                                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                                    <img src={icon.src} alt={icon.alt} width={40} height={40} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row items-center gap-14 my-4 lg-my-0 mx-8">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className='font-century font-bold text-lg leading-normal mb-4 text-center text-white'>
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li
                                        className='mt-1 font-century text-sm leading-normal text-center text-white-400 hover:text-slate-gray'
                                        key={link.name}
                                    >
                                        <Link to={link.link}>{link.name}</Link>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="flex lg:hidden flex-row items-center gap-14 my-4 lg-my-0">
                        {helpLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className='font-century text-lg leading-normal font-bold mb-4 text-center text-white'>
                                    {section.title}
                                </h4>
                                <ul>
                                    {section.links.map((link) => (
                                        <li
                                            className='mt-1 font-century text-sm leading-normal text-center text-white-400 hover:text-slate-gray'
                                            key={link.name}
                                        >
                                            <Link to={link.link}>{link.name}</Link>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex flex-row items-center gap-14 my-4 lg-my-0 mx-8">
                    {helpLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className='font-century text-lg leading-normal font-bold mb-4 text-center text-white'>
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li
                                        className='mt-1 font-century text-sm leading-normal text-center text-white-400 hover:text-slate-gray'
                                        key={link.name}
                                    >
                                        <Link to={link.link}>{link.name}</Link>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


                <div className="flex flex-row items-center">
                    {contactLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className='font-century text-lg leading-normal font-bold mb-4 text-center text-white'>
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li
                                        className='mt-1 font-century text-sm leading-normal text-center text-white-400 hover:text-slate-gray'
                                        key={link.name}
                                    >
                                        <Link to={link.link}>{link.name}</Link>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


            </div>
            <div className='text-white font-century flex justify-center items-center text-xs mt-6 mb-2 text-center'>
                <p>Todos los Derechos Reservados © 2024 - +FX™ - Una División de Plus Group</p>
            </div>

        </footer >
    );
};

export default Footer;