import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { swiperInventory } from '../constants'
import 'swiper/css/navigation';
import '../css/swiperHome.css';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperHome = () => {

    return (
        <>
            <div className='shadow-2xl'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false, }}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0 text-white font-avenir"
                >
                    {swiperInventory.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='h-[300px] md:h-[400px] xl:h-[500px] flex justify-center items-end' style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: item.aspect }}>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </>
    );
}

export default SwiperHome