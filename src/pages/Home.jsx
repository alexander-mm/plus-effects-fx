import { useState } from 'react'
import { canon1 } from '../assets/images'
import { machines } from '../constants'
import CanonCard from '../components/CanonCard'

const Home = () => {

    const [bigCanonImg, setBigCanonImg] = useState(canon1)

    return (
        <section className='bg-black'>
            <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10">

                <div className="w-full xl:w-2/5 relative flex flex-col justify-center items-start pr-2 pl-8 sm:pl-16 mt-48 mb-12 xl:mt-20 mr-32">
                    <p className="text-white text-2xl font-montserrat mb-10">Equipos a la vanguardia mundial !</p>
                    <h1 className=" text-pale-red font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-10">
                        <span className="text-white xl:bg-black xl:whitespace-nowrap relative z-[1] pr-10">Nuestra Estrella</span>
                        <br />
                        <span className=" text-white inline-block mt-14 ">ESPUMA</span> One
                    </h1>
                    <p className="text-white font-montserrat text-lg leading-8 mt-12 mb-4 sm:max-w-sm">Explore todo nuestro catálogo de cañones de espuma.</p>
                </div>

                <div className="
                    bg-black
                        flex flex-1 relative 
                        justify-center items-center
                        border-2 border-white/50 rounded-2xl
                        px-[1em]  xl:px-[2em]
                        pb-[10em] sm:pb-[14em] md:pb-[16em] lg:pb-[16em] xl:pb-[14em]
                        pt-[2em] md:pt-[3em]  xl:pt-[1em]
                        mx-[1em] sm:mx-[2em] md:mx-[8em] xl:mx-[1.5em]
                        xl:mt-[8rem]
                    ">
                    <img src={bigCanonImg} alt="shoe collection" width={610} height={500} className=" object-contain relative z-1" />

                    <div className='flex sm:gap-6 gap-4 absolute -bottom-[-5%]  max-sm:px-6'>
                        {machines.map((image, index) => (
                            <div key={index}>
                                <CanonCard
                                    index={index}
                                    imgURL={image}
                                    changeBigCanonImage={(shoe) => setBigCanonImg(shoe)}
                                    bigCanonImg={bigCanonImg}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;