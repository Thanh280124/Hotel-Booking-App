
import Aboutus from '../../assets/AboutUs.jpg'
const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-[90%] lg:w-[50%] flex items-center justify-center">
        <img src={Aboutus} className='rounded-t-[50%] w-[90%] h-[100%] lg:w-[100%] lg:h-[80%] 2xl:w-[90%] 2xl:h-[90%]' alt="" />
      </div>
      <div className='w-[90%] lg:w-[50%] flex flex-col gap-4 py-11 px-7'>
        <small className='text-2xl font-semibold font-[poppins]'>The Royal Hotel</small>
        <h2 className='text-4xl font-extrabold'>Where Elegance Meets <span className='text-green-500'>Excellence</span></h2>
        <p className='text-[15px]'>Nestled in the heart of Vaasa, CET offers a perfect blend of comfort, elegance, and warm hospitality. Whether you are visiting for business or leisure, our hotel provides a tranquil retreat with world-class amenities and personalized service to make your stay unforgettable.</p>
      <div className='grid md:grid-cols-3 lg:grid-cols-2 gap-8 mt-12 2xl:grid-cols-3'>
      <p className='h-[100px] w-[200px] flex flex-col items-center justify-center bg-[rgba(157,126,84,0.05)]  border border-solid rounded-[25px] border-green-400 font-semibold text-3xl text-center leading-[30px]'>500+ <span className='text-xl block'>Award Wins</span></p>
      <p className='h-[100px] w-[200px] mt-[20px] flex flex-col items-center justify-center bg-[rgba(157,126,84,0.05)]  border border-solid rounded-[25px] border-green-400 font-semibold text-3xl text-center leading-[30px]'>250k+ <span className='text-xl block'>Visitors Vists</span></p>
      <p className='h-[100px] w-[200px] flex flex-col items-center justify-center bg-[rgba(157,126,84,0.05)]  border border-solid rounded-[25px] border-green-400 font-semibold text-3xl text-center leading-[30px]'>150k+ <span className='text-xl block'>Events</span></p>
      </div>
      </div>
    </div>
  )
}

export default AboutUs
