import React from 'react'
import { assets, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StartRating from '../components/StartRating';

const AllRooms = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flx-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 '>
        <div >
             <div>
                <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
                <p className='text-sm md:text-base text-gray-500/90 mt-2'>
                    Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                </p>
            </div>


            {roomsDummyData.map((room)=>(
                <div className={`md:flex lf:flex mt-5 mb-5 gap-5 `}>
                    <img onClick={()=>{navigate(`/rooms/${room._id}`);
                        scrollTo(0,0);
                    }}
                     src={room.images[0]} alt="hotel-img" title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
                    <div>
                        <p className='text-gray-500'>{room.hotel.city}</p>
                        <p 
                          onClick={()=>{navigate(`/rooms/${room._id}`);
                                scrollTo(0,0);
                            }}  
                        className='text-gray-800 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>
                        <div className='flex items-center'>
                            <StartRating/>
                            <p className='ml-2'>
                                200+ reviews
                            </p>
                        </div>
                        <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                            <img src={assets.locationIcon} alt="location icon" />
                            <span>
                                {room.hotel.address}
                            </span>
                        </div>
                    </div>

                </div>

            ))}

        </div>
       
        {/* {filters} */}
        <div>
            

        </div>
    </div>
  )
}

export default AllRooms