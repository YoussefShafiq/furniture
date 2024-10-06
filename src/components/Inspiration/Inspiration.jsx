import React from 'react'
import img1 from '../../assets/images/Mask Group-3.png'
import img2 from '../../assets/images/Mask Group-4.png'
import img3 from '../../assets/images/Mask Group-5.png'
import { useInView } from 'react-intersection-observer'

export default function Inspiration() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

    return <>
        <div ref={ref}
            className={`py-14 pb-5 transition-transform duration-500 ${inView ? 'slide-in-visible' : 'slide-in-hidden'}`} >
            <div className='text-center '>
                <h2 className='font-bold text-3xl text-[#333333] '>Inspiration Collection</h2>
                <p className='text-[#666666] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex justify-center items-center gap-x-12 py-20">
                <div className='w-1/5 '>
                    <img src={img1} alt="" />
                </div>
                <div className='w-1/5 -translate-y-10'>
                    <img src={img2} alt="" />
                </div>
                <div className='w-1/5 '>
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    </>
}
