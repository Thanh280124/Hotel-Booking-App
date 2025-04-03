
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay} from "swiper/modules";
import Img1 from'../../assets/Testimonials img/img1.jpg'
import Img2 from'../../assets/Testimonials img/img2.jpg'
import Img3 from'../../assets/Testimonials img/img3.jpg'
const Testimonials = () => {
  return (
    <div className="flex flex-col gap-5 mt-32">
      <small className="text-2xl font-semibold font-[poppins]">Testimonials</small>
      <h2 className="text-4xl font-extrabold">
        What Ours Clients <span className="text-green-500">Says</span>
      </h2>

      <Swiper slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay:1000,
          }}
          breakpoints={{
            0:{
                slidesPerView:1
            },
            1200:{
                slidesPerView: 2
            }
          }}
          speed={1500}
          modules={[Autoplay]}
          className="w-full">
            <SwiperSlide>
                    <div className="testimonial flex items-center gap-10">
                        <img src={Img1} className="rounded-tl-[150px] rounded-tr-[150px] rounded-bl-[30px] rounded-br-[30px]" style={{ width: "150px", height: "200px", objectFit: "cover" }}/>
                        <div className="content flex flex-col gap-4 p-3 ">
                            <h3 className="text-4xl">John Doe <span className="block text-xl font-[poppins] font-light">Manager</span></h3>
                            <p className="p-5 border border-[rgba(131,131,131,0.2)] rounded-2xl">The room was spacious and well-appointed. The king bed was remarkably comfortable, and I appreciated the high-quality linens and variety of pillow options. The bathroom is rainfall shower was a wonderful touch.</p>
                        </div>
                    </div>
            </SwiperSlide>

            <SwiperSlide>
                    <div className="testimonial flex items-center gap-10">
                        <img src={Img2} className="rounded-tl-[150px] rounded-tr-[150px] rounded-bl-[30px] rounded-br-[30px]" style={{ width: "180px", height: "200px", objectFit: "cover" }}/>
                        <div className="content flex flex-col gap-4 p-3 ">
                            <h3 className="text-4xl">John Doe <span className="block text-xl font-[poppins] font-light">Manager</span></h3>
                            <p className="p-5 border border-[rgba(131,131,131,0.2)] rounded-2xl">The room was spacious and well-appointed. The king bed was remarkably comfortable, and I appreciated the high-quality linens and variety of pillow options. The bathroom is rainfall shower was a wonderful touch.</p>
                        </div>
                    </div>
            </SwiperSlide>

            <SwiperSlide>
                    <div className="testimonial flex items-center gap-10">
                        <img src={Img3} className="rounded-tl-[150px] rounded-tr-[150px] rounded-bl-[30px] rounded-br-[30px]" style={{ width: "180px", height: "200px", objectFit: "cover" }}/>
                        <div className="content flex flex-col gap-4 p-3 ">
                            <h3 className="text-4xl">John Doe <span className="block text-xl font-[poppins] font-light">Manager</span></h3>
                            <p className="p-5 border border-[rgba(131,131,131,0.2)] rounded-2xl">The room was spacious and well-appointed. The king bed was remarkably comfortable, and I appreciated the high-quality linens and variety of pillow options. The bathroom is rainfall shower was a wonderful touch.</p>
                        </div>
                    </div>
            </SwiperSlide>


            
      </Swiper>
    </div>
  )
}

export default Testimonials
