import React from 'react'
import circle from '../../assets/images/Ellipse 5.png'
import image from '../../assets/images/Mask Group.png'
import { useInView } from 'react-intersection-observer'

export default function Beautify() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

    return <>
        <div ref={ref}
            className={`flex justify-evenly items-center py-16 bg-[#F2F5FF] transition-transform duration-500 ${inView ? 'slide-in-visible' : 'slide-in-hidden'}`} >
            <div className="flex flex-col justify-center items-start w-1/4">
                <h2 className='font-bold text-3xl text-[#333333] pb-3'>beautify your space</h2>
                <p className='text-[#666666]' >Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <button className='mt-3 bg-[#054C73] uppercase text-white py-4 px-5 rounded-3xl '>Learn more</button>
            </div>
            <div className='w-1/4 relative'>
                <div className="absolute translate-x-16 translate-y-1/4">
                    <img src={circle} alt="" />
                </div>

                <div className="relative z-100">
                    <img src={image} alt="" />
                </div>

            </div>
        </div>
    </>
}
