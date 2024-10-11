import React from 'react'
import img1 from '../../assets/images/Mask Group-3.png'
import img2 from '../../assets/images/Mask Group-4.png'
import img3 from '../../assets/images/Mask Group-5.png'


export default function Inspiration() {
    return <>
        <div
            className={`py-14 pb-5 transition-transform duration-500 `} >
            <div className='text-center wow animate__flipInX'>
                <h2 className='font-bold text-3xl text-[#333333] '>Inspiration Collection</h2>
                <p className='text-[#666666] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex justify-center items-center gap-x-12 py-20">
                <div className='w-1/5 wow animate__bounceInLeft'>
                    <img src={img1} alt="" />
                </div>
                <div className='w-1/5 -translate-y-10 wow animate__fadeIn'>
                    <img src={img2} alt="" />
                </div>
                <div className='w-1/5 wow animate__bounceInRight'>
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    </>
}
