

const Services = () => {
  return (
    <div className="flex flex-col gap-5 mt-32">
        <small className='text-2xl font-semibold font-[poppins]'>Facilities</small>
        <h2 className='text-4xl font-extrabold'>Ours Best <span className='text-green-500'>Services</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div className="py-[35px] px-[30px] border rounded-xl flex flex-col gap-1 bg-[rgba(131,131,131,0.05)]
        hover:border-green-500 hover:border-2 transition duration-700 hover:animate-shake">
            <i className="ri-hotel-line text-4xl text-green-500 mb-1"></i>
            <h3 className="text-2xl mb-2">Basic Facilities</h3>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Reception /Front Desk</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Room Services</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- House Keeping</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Wifi & Parking</p>
        </div>

        <div className="py-[35px] px-[30px] border rounded-xl flex flex-col gap-1 bg-[rgba(131,131,131,0.05)]
        hover:border-green-500 hover:border-2 transition duration-700 hover:animate-shake">
            <i className="ri-hotel-bed-line text-4xl text-green-500 mb-1"></i>
            <h3 className="text-2xl mb-2">Room Aminities</h3>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Comfortable Bedding</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Bed Room and Pool</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- TV & AC</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Bar</p>
        </div>


        <div className="py-[35px] px-[30px] border rounded-xl flex flex-col gap-1 bg-[rgba(131,131,131,0.05)]
        hover:border-green-500 hover:border-2 transition duration-700 hover:animate-shake">
            <i className="ri-goblet-line text-4xl text-green-500 mb-1"></i>
            <h3 className="text-2xl mb-2">Dinning Options</h3>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Restaurant Caffe</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Bar & Lounge</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Bubble Tea & Canteen</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Room Service</p>
        </div>

        
        <div className="py-[35px] px-[30px] border rounded-xl flex flex-col gap-1 bg-[rgba(131,131,131,0.05)]
        hover:border-green-500 hover:border-2 transition duration-700 hover:animate-shake">
            <i className="ri-restaurant-line text-4xl text-green-500 mb-1"></i>
            <h3 className="text-2xl mb-2">Special Features</h3>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Custom Rooms</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Cricket Ground</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Gym</p>
            <p className="text-xl mt-1 font-primary text-[rgba(131,131,131,1)]">- Laundry</p>
        </div>
    </div>
    </div>
  )
}

export default Services