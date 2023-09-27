import { canon1 } from '../assets/images'

const Home = () => {

    return (
        <section className='bg-black pt-10'>
            <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen xl:min-h-[91vh] max-container gap-10 pb-24 xl:py-20 xl:mb-12">

                <div className="w-full xl:w-2/5 relative flex flex-col justify-center items-start pr-2 pl-8 sm:pl-16 mt-48 mb-12 xl:mt-20 mr-32">
                    <p className="text-white text-2xl font-montserrat mb-10">Equipos a la vanguardia mundial !</p>
                    <h1 className="relative z-[9] text-pale-red font-montserrat text-8xl max-md:text-[72px] max-md:leading-[82px]">
                        <span className="text-white xl:bg-black xl:whitespace-nowrap pr-10">Nuestra Estrella</span>
                        <br />
                        <span className=" text-white inline-block mt-14 font-sterilict text-[0.8em]">ESPUMA </span>
                        <span className='font-sterilict text-[0.8em]'> - One</span>
                    </h1>
                    <p className="text-white font-montserrat text-xl sm:whitespace-nowrap leading-8 mt-12 mb-4 sm:max-w-sm">Explore todo nuestro catálogo de cañones de espuma.</p>
                </div>

                <div className="
                    bg-black
                        flex flex-1 relative 
                        justify-center items-center
                        border-2 border-white/50 rounded-2xl
                        px-[1em] 
                        mx-[1em] sm:mx-[2em] md:mx-[8em] xl:mx-[1.5em]
                        xl:mt-[8rem]
                    ">
                    <img src={canon1} alt="canon collection" width={610} height={500} className=" object-contain relative z-1" />
                </div>
            </div>
        </section>
    );
};

export default Home;