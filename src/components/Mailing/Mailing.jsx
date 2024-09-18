import React from 'react'

export default function Mailing() {
    return <>
        <div className="bg-[#f2f5ff]  p-12">
            <div className='text-center w-1/3 m-auto'>
                <h2 className='font-bold text-3xl text-[#333333] mb-2 '>Join Our Mailing List</h2>
                <p className='text-[#666666] '>Sign up to receive inspiration, product updates, and special offers from our team.</p>
            </div>
            <div className="w-full max-w-sm min-w-[200px] m-auto my-10">
                <div className="relative">
                    <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-[#154158] text-sm border border-[#054c73] pl-3 pr-[80px] py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email Address" />
                    <button className="absolute w-[80px] h-full right-0 top-0 bg-[#054c73] px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-[#154158] focus:shadow-none active:bg-[#154158] hover:bg-[#154158] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </>
}
