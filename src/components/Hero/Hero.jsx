import React from 'react';
import background from '../../assets/images/scandinavian-interior-mockup-wall-decal-background 1.png';

export default function Hero() {
    return (
        <>
            <div
                className="bg-cover bg-center h-[700px] flex justify-end items-center p-16"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                <div className='bg-[#dee8f3] md:w-[50%] w-full rounded-[10px] p-5'>
                    <h1 className='font-semibold text-[16px] text-[#333333] tracking-[3px] '>New Arrival</h1>
                    <h2 className='text-[#054C73] font-bold text-[50px] leading-[65px] tracking-[0]   '>Discover Our New Collection</h2>
                    <p className='font-normal text-[17px] leading-[39px] text-[#333333] ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quod. Atque iste quibusdam enim maxime.</p>
                    <button className='bg-[#054C73] mt-6 px-[60px] py-[20px] uppercase rounded-[50px] font-bold text-white text-[14px] ' >buy now </button>
                </div>
            </div>
            <div className="flex justify-evenly bg-[#F2F5FF] h-[150px] text-[#333333]">
                <div className='flex items-center justify-center gap-x-3'>
                    <div className='text-5xl text-[#054c73]' >
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <div>
                        <h2 className='font-semibold text-[20px] text-[#333333] '>Free delivery</h2>
                        <p className='font-thin text-[16px] text-[#333333]' >Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-x-3'>
                    <div className='text-5xl text-[#054c73]' >
                        <i class="fa-solid fa-stopwatch"></i>
                    </div>
                    <div>
                        <h2 className='font-semibold text-[20px] text-[#333333] '>Support 24/7</h2>
                        <p className='font-thin text-[16px] text-[#333333]' >Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-x-3'>
                    <div className='text-5xl text-[#054c73]' >
                        <i class="fa-solid fa-user-shield"></i>
                    </div>
                    <div>
                        <h2 className='font-semibold text-[20px] text-[#333333] '>100% Authentic</h2>
                        <p className='font-thin text-[16px] text-[#333333]' >Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
