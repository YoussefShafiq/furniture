import React from 'react'
import img1 from '../../assets/images/Purchase Securely.png'
import img2 from '../../assets/images/Ships From Warehouse.png'
import img3 from '../../assets/images/Style Your Room.png'
import { useInView } from 'react-intersection-observer'


export default function HowWorks() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
    return <>
        <div ref={ref} className={`py-14 pb-5 border-t-[.5px]  border-t-[#cdcdcd] transition-transform duration-500 ${inView ? 'slide-in-visible' : 'slide-in-hidden '}`}>
            <div className='text-center '>
                <h2 className='font-bold text-3xl text-[#333333] '>How It Works</h2>
                <p className='text-[#666666] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex justify-center items-start gap-x-12 py-20">
                <div className='w-1/5 flex-col'>
                    <img src={img1} alt="" />
                    <h3 className='text-center pt-3 font-bold capitalize text-[#333333]'>Purchase Securely</h3>
                    <p className='px-1 text-center font-normal text-[#666666] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='w-1/5 flex-col'>
                    <img src={img2} alt="" />
                    <h3 className='text-center pt-3 font-bold capitalize text-[#333333]'>Ships From Warehouse</h3>
                    <p className='px-1 text-center font-normal text-[#666666] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>
                <div className='w-1/5 flex-col'>
                    <img src={img3} alt="" />
                    <h3 className='text-center pt-3 font-bold capitalize text-[#333333]'>Style Your Room</h3>
                    <p className='px-1 text-center font-normal text-[#666666] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </>
}
