import React from 'react'
import img1 from '../../assets/images/Mask Group-1.png'
import img2 from '../../assets/images/Image-living room.png'
import img3 from '../../assets/images/Mask Group-2.png'

export default function BrowseRange() {
    return <>
        <div className={`py-14 pb-5 `}>
            <div className='text-center wow animate__flipInX '>
                <h2 className='font-bold text-3xl text-[#333333] '>Browse The Range</h2>
                <p className='text-[#666666] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex justify-center items-center gap-x-12 py-20">
                <div className='w-1/5 flex-col wow animate__bounceInLeft'>
                    <img src={img1} alt="" />
                    <h3 className='text-center py-3 font-bold capitalize text-[#333333]'>Dining</h3>
                </div>
                <div className='w-1/5 flex-col  wow animate__bounceInUp '>
                    <img src={img2} alt="" />
                    <h3 className='text-center py-3 font-bold capitalize text-[#333333]'>Living</h3>
                </div>
                <div className='w-1/5 flex-col wow animate__bounceInRight'>
                    <img src={img3} alt="" />
                    <h3 className='text-center py-3 font-bold capitalize text-[#333333]'>Bedroom</h3>
                </div>
            </div>
        </div>
    </>
}
