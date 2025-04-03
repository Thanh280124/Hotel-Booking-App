import Img from '../../assets/rooms/double-1.jpg'

const BestRoom = () => {
  return (
    <div className="flex flex-col gap-5 mt-32">
      <small className="text-2xl font-semibold font-[poppins]">The Best Luxury</small>
      <h2 className="text-4xl font-extrabold">
        Ours Best <span className="text-green-500">Rooms</span>
      </h2>

      <div className="cards grid grid-cols-3 gap-5 gap-y-20 mt-7">
        <div className="card-container w-[300px] h-[320px] relative">
          <div className="card-inner relative w-full h-full transition-all duration-500 transform hover:rotate-y-180" 
               style={{ transformStyle: 'preserve-3d' }}>
            <div 
              className="front absolute w-full h-full rounded-3xl flex p-6 flex-col justify-end items-center bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${Img})`,
                backfaceVisibility: 'hidden'
              }}
            >
              <button className="bg-[#8BB68A] p-1 sm:px-5 sm:py-2 px-2 text-xl items-center rounded-2xl text-white font-semibold mt-4 w-full">
                Junior Suit
              </button>
            </div>
            <div 
              className="back absolute w-full h-full rounded-3xl flex flex-col justify-center items-center text-center"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            > 
              <div className="absolute inset-0 rounded-3xl bg-cover bg-center" 
                style={{
                  backgroundImage: `url(${Img})`,
                  zIndex: 0
                }}
              />
              
              {/* Content container with white background */}
              <div className="relative z-10 bg-white bg-opacity-70 p-6 rounded-3xl w-full h-full flex flex-col justify-center items-center gap-5">
                <div className="price text-2xl font-bold text-white bg-black p-1">$200/N</div>
                <div className="content text-gray-600">
                  <h3 className="text-2xl font-extrabold mb-2">Junior Suit</h3>
                  <p className='text-xl font-medium'>- Daily Cleaning</p>
                  <p className='text-xl font-medium'>- Home Services</p>
                  <p className='text-xl font-medium'>- House Keeping</p>
                  <p className='text-xl font-medium'>- Wifi & Parking</p>
                </div>
                <div className="mt-4 flex flex-row justify-between items-center w-full ">
                  <button className="bg-[#8BB68A] p-2 sm:px-5 sm:py-2 px-2 text-xl rounded-2xl text-white font-semibold">
                    Book Now
                  </button>
                  <i className='ri-arrow-right-line flex justify-center items-center h-[100%] w-[50px] bg-black text-white'></i>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="card-container w-[300px] h-[320px] relative">
          <div className="card-inner relative w-full h-full transition-all duration-500 transform hover:rotate-y-180" 
               style={{ transformStyle: 'preserve-3d' }}>
            <div 
              className="front absolute w-full h-full rounded-3xl flex p-6 flex-col justify-end items-center bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${Img})`,
                backfaceVisibility: 'hidden'
              }}
            >
              <button className="bg-[#8BB68A] p-1 sm:px-5 sm:py-2 px-2 text-xl items-center rounded-2xl text-white font-semibold mt-4 w-full">
                Junior Suit
              </button>
            </div>
            <div 
              className="back absolute w-full h-full rounded-3xl flex flex-col justify-center items-center text-center"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            > 
              <div className="absolute inset-0 rounded-3xl bg-cover bg-center" 
                style={{
                  backgroundImage: `url(${Img})`,
                  zIndex: 0
                }}
              />
              
              {/* Content container with white background */}
              <div className="relative z-10 bg-white bg-opacity-70 p-6 rounded-3xl w-full h-full flex flex-col justify-center items-center gap-5">
                <div className="price text-2xl font-bold text-white bg-black p-1">$200/N</div>
                <div className="content text-gray-600">
                  <h3 className="text-2xl font-extrabold mb-2">Junior Suit</h3>
                  <p className='text-xl font-medium'>- Daily Cleaning</p>
                  <p className='text-xl font-medium'>- Home Services</p>
                  <p className='text-xl font-medium'>- House Keeping</p>
                  <p className='text-xl font-medium'>- Wifi & Parking</p>
                </div>
                <div className="mt-4 flex flex-row justify-between items-center w-full ">
                  <button className="bg-[#8BB68A] p-2 sm:px-5 sm:py-2 px-2 text-xl rounded-2xl text-white font-semibold">
                    Book Now
                  </button>
                  <i className='ri-arrow-right-line flex justify-center items-center h-[100%] w-[50px] bg-black text-white'></i>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="card-container w-[300px] h-[320px] relative">
          <div className="card-inner relative w-full h-full transition-all duration-500 transform hover:rotate-y-180" 
               style={{ transformStyle: 'preserve-3d' }}>
            <div 
              className="front absolute w-full h-full rounded-3xl flex p-6 flex-col justify-end items-center bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${Img})`,
                backfaceVisibility: 'hidden'
              }}
            >
              <button className="bg-[#8BB68A] p-1 sm:px-5 sm:py-2 px-2 text-xl items-center rounded-2xl text-white font-semibold mt-4 w-full">
                Junior Suit
              </button>
            </div>
            <div 
              className="back absolute w-full h-full rounded-3xl flex flex-col justify-center items-center text-center"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            > 
              <div className="absolute inset-0 rounded-3xl bg-cover bg-center" 
                style={{
                  backgroundImage: `url(${Img})`,
                  zIndex: 0
                }}
              />
              
              {/* Content container with white background */}
              <div className="relative z-10 bg-white bg-opacity-70 p-6 rounded-3xl w-full h-full flex flex-col justify-center items-center gap-5">
                <div className="price text-2xl font-bold text-white bg-black p-1">$200/N</div>
                <div className="content text-gray-600">
                  <h3 className="text-2xl font-extrabold mb-2">Junior Suit</h3>
                  <p className='text-xl font-medium'>- Daily Cleaning</p>
                  <p className='text-xl font-medium'>- Home Services</p>
                  <p className='text-xl font-medium'>- House Keeping</p>
                  <p className='text-xl font-medium'>- Wifi & Parking</p>
                </div>
                <div className="mt-4 flex flex-row justify-between items-center w-full ">
                  <button className="bg-[#8BB68A] p-2 sm:px-5 sm:py-2 px-2 text-xl rounded-2xl text-white font-semibold">
                    Book Now
                  </button>
                  <i className='ri-arrow-right-line flex justify-center items-center h-[100%] w-[50px] bg-black text-white'></i>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="card-container w-[300px] h-[320px] relative">
          <div className="card-inner relative w-full h-full transition-all duration-500 transform hover:rotate-y-180" 
               style={{ transformStyle: 'preserve-3d' }}>
            <div 
              className="front absolute w-full h-full rounded-3xl flex p-6 flex-col justify-end items-center bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${Img})`,
                backfaceVisibility: 'hidden'
              }}
            >
              <button className="bg-[#8BB68A] p-1 sm:px-5 sm:py-2 px-2 text-xl items-center rounded-2xl text-white font-semibold mt-4 w-full">
                Junior Suit
              </button>
            </div>
            <div 
              className="back absolute w-full h-full rounded-3xl flex flex-col justify-center items-center text-center"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            > 
              <div className="absolute inset-0 rounded-3xl bg-cover bg-center" 
                style={{
                  backgroundImage: `url(${Img})`,
                  zIndex: 0
                }}
              />
              
              {/* Content container with white background */}
              <div className="relative z-10 bg-white bg-opacity-70 p-6 rounded-3xl w-full h-full flex flex-col justify-center items-center gap-5">
                <div className="price text-2xl font-bold text-white bg-black p-1">$200/N</div>
                <div className="content text-gray-600">
                  <h3 className="text-2xl font-extrabold mb-2">Junior Suit</h3>
                  <p className='text-xl font-medium'>- Daily Cleaning</p>
                  <p className='text-xl font-medium'>- Home Services</p>
                  <p className='text-xl font-medium'>- House Keeping</p>
                  <p className='text-xl font-medium'>- Wifi & Parking</p>
                </div>
                <div className="mt-4 flex flex-row justify-between items-center w-full ">
                  <button className="bg-[#8BB68A] p-2 sm:px-5 sm:py-2 px-2 text-xl rounded-2xl text-white font-semibold">
                    Book Now
                  </button>
                  <i className='ri-arrow-right-line flex justify-center items-center h-[100%] w-[50px] bg-black text-white'></i>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="card-container w-[300px] h-[320px] relative">
          <div className="card-inner relative w-full h-full transition-all duration-500 transform hover:rotate-y-180" 
               style={{ transformStyle: 'preserve-3d' }}>
            <div 
              className="front absolute w-full h-full rounded-3xl flex p-6 flex-col justify-end items-center bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${Img})`,
                backfaceVisibility: 'hidden'
              }}
            >
              <button className="bg-[#8BB68A] p-1 sm:px-5 sm:py-2 px-2 text-xl items-center rounded-2xl text-white font-semibold mt-4 w-full">
                Junior Suit
              </button>
            </div>
            <div 
              className="back absolute w-full h-full rounded-3xl flex flex-col justify-center items-center text-center"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            > 
              <div className="absolute inset-0 rounded-3xl bg-cover bg-center" 
                style={{
                  backgroundImage: `url(${Img})`,
                  zIndex: 0
                }}
              />
              
              {/* Content container with white background */}
              <div className="relative z-10 bg-white bg-opacity-70 p-6 rounded-3xl w-full h-full flex flex-col justify-center items-center gap-5">
                <div className="price text-2xl font-bold text-white bg-black p-1">$200/N</div>
                <div className="content text-gray-600">
                  <h3 className="text-2xl font-extrabold mb-2">Junior Suit</h3>
                  <p className='text-xl font-medium'>- Daily Cleaning</p>
                  <p className='text-xl font-medium'>- Home Services</p>
                  <p className='text-xl font-medium'>- House Keeping</p>
                  <p className='text-xl font-medium'>- Wifi & Parking</p>
                </div>
                <div className="mt-4 flex flex-row justify-between items-center w-full ">
                  <button className="bg-[#8BB68A] p-2 sm:px-5 sm:py-2 px-2 text-xl rounded-2xl text-white font-semibold">
                    Book Now
                  </button>
                  <i className='ri-arrow-right-line flex justify-center items-center h-[100%] w-[50px] bg-black text-white'></i>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="card-container w-[300px] h-[320px] relative">
          <div className="card-inner relative w-full h-full transition-all duration-500 transform hover:rotate-y-180" 
               style={{ transformStyle: 'preserve-3d' }}>
            <div 
              className="front absolute w-full h-full rounded-3xl flex p-6 flex-col justify-end items-center bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${Img})`,
                backfaceVisibility: 'hidden'
              }}
            >
              <button className="bg-[#8BB68A] p-1 sm:px-5 sm:py-2 px-2 text-xl items-center rounded-2xl text-white font-semibold mt-4 w-full">
                Junior Suit
              </button>
            </div>
            <div 
              className="back absolute w-full h-full rounded-3xl flex flex-col justify-center items-center text-center"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            > 
              <div className="absolute inset-0 rounded-3xl bg-cover bg-center" 
                style={{
                  backgroundImage: `url(${Img})`,
                  zIndex: 0
                }}
              />
              
              {/* Content container with white background */}
              <div className="relative z-10 bg-white bg-opacity-70 p-6 rounded-3xl w-full h-full flex flex-col justify-center items-center gap-5">
                <div className="price text-2xl font-bold text-white bg-black p-1">$200/N</div>
                <div className="content text-gray-600">
                  <h3 className="text-2xl font-extrabold mb-2">Junior Suit</h3>
                  <p className='text-xl font-medium'>- Daily Cleaning</p>
                  <p className='text-xl font-medium'>- Home Services</p>
                  <p className='text-xl font-medium'>- House Keeping</p>
                  <p className='text-xl font-medium'>- Wifi & Parking</p>
                </div>
                <div className="mt-4 flex flex-row justify-between items-center w-full ">
                  <button className="bg-[#8BB68A] p-2 sm:px-5 sm:py-2 px-2 text-xl rounded-2xl text-white font-semibold">
                    Book Now
                  </button>
                  <i className='ri-arrow-right-line flex justify-center items-center h-[100%] w-[50px] bg-black text-white'></i>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BestRoom;