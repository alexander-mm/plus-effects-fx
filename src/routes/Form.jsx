import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Error from './Error'
import CerrarBtn from '../assets/icons/cerrar.svg'
import emailjs from 'emailjs-com';

const Form = ({ setForm }) => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        // Recupera la preferencia de idioma almacenada en localStorage
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const ocultarModal = () => {
        setForm(false)
    }

    const [nombres, setNombres] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [whatsapp, setWhatsApp] = useState("")
    const [email, setEmail] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [mensaje, setMensaje] = useState("")

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombres, apellidos, whatsapp, email, ciudad, mensaje].includes('')) {
            setError(true)
            return;
        }
        setError(false)

        setNombres('')
        setApellidos('')
        setWhatsApp('')
        setEmail('')
        setCiudad('')
        setMensaje('')

        const serviceID = 'service_x62427p';
        const templateID = 'template_x2wx4ye';
        const userID = 'bvahDzKpDYIhGFTkD';

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log('Correo electrónico enviado con éxito', result.text);
            })
            .catch((error) => {
                console.error('Error al enviar el correo electrónico', error);
            });
    };

    return (
        <div className="mx-4 w-4/5 md:w-3/5 xl:w-3/6">
            <div className='border rounded-full p-1 right-10 sm:right-[2em] md:right-[10em] lg:right-[15em] cerrar-modal'>
                <img className="w-full cursor-pointer" src={CerrarBtn} alt="cerrar form" onClick={ocultarModal} />
            </div>
            <div className='pt-20 pb-0'>
                <p className='text-center font-century font-bold leading-normal text-2xl text-white'>{t('contact-us')}</p>
            </div>
            <div className='pb-[50em] sm:pb-[30em] lg:pb-[5em]'>
                <form
                    onSubmit={handleSubmit}
                    className="bg-black rounded-md py-10 px-8"
                >

                    <div className="mb-5">
                        <label htmlFor="nombres" className="block text-white uppercase font-bold">
                            {t('name')}
                        </label>
                        <input
                            id="nombres"
                            type="text"
                            name="nombres"
                            placeholder={t('w-name')}
                            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={nombres}
                            onChange={(e) => setNombres(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="apellidos" className="block text-white uppercase font-bold">
                            {t('lastname')}
                        </label>
                        <input
                            id="apellidos"
                            type="text"
                            name="apellidos"
                            placeholder={t('w-lastname')}
                            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="whatsapp" className="block text-white uppercase font-bold">
                            WhatsApp:
                        </label>
                        <input
                            id="whatsapp"
                            type="text"
                            name="whatsapp"
                            placeholder={t('w-whatsapp')}
                            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={whatsapp}
                            onChange={(e) => setWhatsApp(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block text-white uppercase font-bold">
                            E-mail:
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder={t('w-e-mail')}
                            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="ciudad" className="block text-white uppercase font-bold">
                            {t('city')}
                        </label>
                        <input
                            id="ciudad"
                            type="text"
                            name="ciudad"
                            placeholder={t('w-city')}
                            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={ciudad}
                            onChange={(e) => setCiudad(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="pais" className="block text-white uppercase font-bold">
                            {t('msj')}
                        </label>
                        <textarea
                            id="pais"
                            type="text"
                            name="pais"
                            placeholder=""
                            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        />
                    </div>

                    {error && <Error />}

                    <input
                        type="submit"
                        className="bg-black border hover:bg-green-600 w-full p-3 text-white rounded-md mt-8 uppercase font-bold cursor-pointer" value={t('send-button')} />
                </form>
            </div>
        </div>
    )
}

export default Form