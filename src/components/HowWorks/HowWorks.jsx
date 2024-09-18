import React from 'react'
import img1 from '../../assets/images/Purchase Securely.png'
import img2 from '../../assets/images/Ships From Warehouse.png'
import img3 from '../../assets/images/Style Your Room.png'


export default function HowWorks() {
    return <>
        <div className='py-14 pb-5 border-t-[.5px]  border-t-[#cdcdcd]'>
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
