import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const elementoEspecifico = document.getElementById('inicioHome');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const sectionStyle = {
        backgroundImage: `url("https://www.masqueunefecto.com/wp-content/uploads/2024/01/portada-scaled.jpg")`,
    };

    return (
        <section id='inicioHome' style={sectionStyle} className='relative py-[450px] bg-left bg-no-repeat bg-cover'>
            {/* Contenido de tu sección */}
        </section>
    );
};

export default Home;
