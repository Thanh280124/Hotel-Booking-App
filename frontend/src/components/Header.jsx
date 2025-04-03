
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import BannerImg from '../assets/Banner.jpg'
import BannerImg2 from '../assets/Banner2.jpg'
import BannerImg3 from '../assets/Banner3.jpg'
import { Autoplay, Parallax } from "swiper/modules";
const Header = () => {
  return (
    <>
     <div className="relative min-h-[100vh] w-full z-10">
          <Swiper className="w-full h-screen"
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay:2500,
          }}
          parallax ={true}
          speed={1500}
          modules={[Autoplay,Parallax]}
          >
         <SwiperSlide>
          <div className=" relative w-full h-screen" style={{
            backgroundImage: `url(${BannerImg3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",   
          }}>
            <div className="absolute xl:left-40 lg:left-16 bottom-[20%] z-2 flex flex-col gap-5">
              <small className="text-white text-2xl font-secondary" data-swiper-parallax ='-200'>Luxury <span className="text-green-300">Hotel</span> & <span className="text-green-300">Restaurant</span></small>
              <h2 className="text-5xl font-bold mb-4 text-white" data-swiper-parallax ='-300'>Welcome to <span className="text-green-300">Hotel CET</span>   <br/> Your <span className="text-green-300">Perfect</span> Escape Awaits</h2>
            </div>
          </div>
         </SwiperSlide>
    
         <SwiperSlide>
          <div className=" relative w-full h-screen" style={{
            backgroundImage: `url(${BannerImg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",   
          }}>
            <div className="absolute xl:left-40 lg:left-16 bottom-[20%] z-2 flex flex-col gap-5">
            <small className="text-white text-2xl font-secondary" data-swiper-parallax ='-200'>Luxury <span className="text-green-300">Hotel</span> & <span className="text-green-300">Restaurant</span></small>
              <h2 className="text-5xl font-bold mb-4 text-white" data-swiper-parallax ='-300'>Welcome to <span className="text-green-300">Hotel CET</span>   <br/> Your <span className="text-green-300">Perfect</span> Escape Awaits</h2>
            </div>
          </div>
         </SwiperSlide>
    
         <SwiperSlide>
          <div className=" relative w-full h-screen" style={{
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",   
          }}>
            <div className="absolute xl:left-40 lg:left-16 bottom-[20%] z-2 flex flex-col gap-5">
            <small className="text-white text-2xl font-secondary" data-swiper-parallax ='-200'>Luxury <span className="text-green-300">Hotel</span> & <span className="text-green-300">Restaurant</span></small>
              <h2 className="text-5xl font-bold mb-4 text-white" data-swiper-parallax ='-300'>Welcome to <span className="text-green-300">Hotel CET</span>   <br/> Your <span className="text-green-300">Perfect</span> Escape Awaits</h2>
            </div>
          </div>
         </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}

export default Header
