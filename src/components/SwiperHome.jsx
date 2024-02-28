import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { swiperHome } from '../constants'
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
                    autoplay={{ delay: 2000, disableOnInteraction: false, }}
                    loop={true}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {swiperHome.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='h-[300px] md:h-[500px] xl:h-[600px] flex justify-center items-end' style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: item.aspect }}>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </>
    );
}

export default SwiperHome