import { useState } from 'react'
import { bigShoe1 } from '../assets/images'
import { shoes } from '../constants'
import ShoeCard from '../components/ShoeCard'

const Home = () => {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

    return (
        <section className='bg-black'>
            <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10">
                <div className="pr-2 pl-8 sm:pl-16 relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28">
                    <p className="text-white text-xl font-montserrat">Our Summer Collection</p>
                    <h1 className="text-white mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                        <span className="text-white xl:bg-black xl:whitespace-nowrap relative z-[1] pr-10">The New Arrival</span>
                        <br />
                        <span className=" text-real-red inline-block mt-3">Nike</span> Shoes
                    </h1>
                    <p className="text-white font-montserrat text-lg leading-8 mt-12 mb-4 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
                </div>

                <div className="relative flex-1 flex justify-center items-center border-2 border-white/50 rounded-2xl mx-10 xl:mx-0 xl:mt-[8rem] pt-10 pb-[10rem] sm:pb-[15rem] bg-black">
                    <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className=" object-contain relative z-1" />

                    <div className='flex sm:gap-6 gap-4 absolute -bottom-[-5%]  max-sm:px-6'>
                        {shoes.map((image, index) => (
                            <div key={index}>
                                <ShoeCard
                                    index={index}
                                    imgURL={image}
                                    changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                                    bigShoeImg={bigShoeImg}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;