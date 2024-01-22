import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const elementoEspecifico = document.getElementById('home');
        if (elementoEspecifico) {
            elementoEspecifico.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const sectionStyle = {
        backgroundImage: `url("https://www.masqueunefecto.com/wp-content/uploads/2024/01/portada-scaled.jpg")`,
    };

    return (
        <section id='home' style={sectionStyle} className='relative py-[550px] bg-center bg-no-repeat bg-cover'>

        </section>
    );
};

export default Home;
