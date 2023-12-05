import { Logo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
    return (
        <footer className=' bg-black pt-20 pb-6 sm:pt-10 px-10'>
            <div className=" max-container">
                <div className='flex justify-around items-center gap-8 md:flex-wrap max-md:flex-col'>
                    <div className='flex flex-col px-2 items-center'>
                        <a href='/'>
                            <img
                                src={Logo}
                                alt='logo'
                                width={120}
                                className='m-0'
                            />
                        </a>
                        <p className='mt-2 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
                            Síguenos en redes sociales !
                        </p>
                        <div className='flex items-center gap-5 mt-2'>
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

                    <div className="flex flex-row items-center gap-[4em] sm:gap-[10em] mt-6 lg:mt-0">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className='font-montserrat text-lg leading-normal font-medium mb-4 text-center text-white'>
                                    {section.title}
                                </h4>
                                <ul>
                                    {section.links.map((link) => (
                                        <li
                                            className='mt-1 font-montserrat text-sm leading-normal text-center text-white-400 hover:text-slate-gray'
                                            key={link.name}
                                        >
                                            <a href={link.link}>{link.name}</a>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row xl:flex-col xl:gap-4 sm:gap-8 justify-center ">
                        <h4 className='font-montserrat text-lg leading-normal font-medium mb-1 text-center text-white'>
                            Contacto
                        </h4>
                        <ul className="flex items-center flex-col sm:flex-row sm:gap-4 xl:flex-col xl:gap-0 text-center">
                            <li className='font-montserrat text-sm leading-normal text-white-400 hover:text-slate-gray'>
                                <a href="/">ventas@masqueunefecto.com</a>
                            </li>
                            <li className='font-montserrat text-sm leading-normal text-white-400 hover:text-slate-gray lg:mt-1'>
                                <a href="/">Telf. +593 98 04 29 801</a>
                            </li>
                            <li className='font-montserrat text-sm leading-normal text-white-400 hover:text-slate-gray lg:mt-1'>
                                <a href="/">Nicanor Gavilanes y Luis Padilla - Lote #6 - San Gabriel, Carchi</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;