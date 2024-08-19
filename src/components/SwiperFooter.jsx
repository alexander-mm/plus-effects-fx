import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { swiperFooter } from '../constants'
import 'swiper/css/navigation';
import '../css/swiperHome.css';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperFooter = () => {

    useEffect(() => {
        document.documentElement.style.setProperty('--swiper-pagination-color', '#FF3B3B');
    }, []);

    return (
        <>
            <div className=' mt-28'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 4000, disableOnInteraction: true, }}
                    loop={true}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0"
                >
                    {swiperFooter.map((item) => (
                            <SwiperSlide key={item.id}>
                                    <div className='flex flex-row justify-around'>
                                        <div className='bg-white p-8 justify-center'>
                                                <div className='bg-black flex items-center flex-col md:flex-row w-[15em] md:w-full py-4'>
                                                    <div className=' w-[8em] md:w-[24em] lg:w-[12em] m-6'>
                                                        <div>
                                                            <img className='rounded-full'src={item.src} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='text-white text-start mx-4'>
                                                        <h2 className='text-[18px] md:text-[20px]'><span className='font-bold'>{item.name}</span> - {item.company}</h2>
                                                        <p className='text-[15px] md:text-[17px] p-4'>{item.opinion}</p>
                                                        <div className='w-[10em]'>
                                                            <img src={item.stars} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                            </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default SwiperFooter